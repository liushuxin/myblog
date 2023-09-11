---
slug: welcome
title: 实现一个显示隐藏动画组件
authors: [shuxin]
tags: [react, animation]
---

Hello 大家好，今天给大家带来的文章是关于如何封装一个对不定高度的内容，显示隐藏的 react 动画组件

`````javascript
import React, { FC, useRef, useEffect, useState, CSSProperties } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { Transition } from 'react-transition-group';
import type { Property } from 'csstype';
import { debounce } from 'lodash';
/**
 *
 * @returns 动画版显示隐藏组件
 */
interface AnimationShowProps {
  // default 300ms
  duration?: number;
  // whether visible
  visible: boolean;
  timingFunction?: Property.AnimationTimingFunction;
  style?: CSSProperties;
}
const resize = (setConHeight: () => void) => debounce(setConHeight, 300);

const AnimationShow: FC<AnimationShowProps> = ({
  duration = 300,
  timingFunction = 'linear',
  visible,
  children,
  style,
}) => {
  const [height, setHeight] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // listen container resize
    const setConHeight = (): void => {
      const clientRect = divRef.current?.getBoundingClientRect();
      if (clientRect) {
        setHeight(clientRect ? clientRect.height : 0);
      }
    };

    const resizeObserver = new ResizeObserver(resize(setConHeight));

    resizeObserver.observe(divRef.current as HTMLDivElement);

    return function cleanup() {
      resizeObserver.disconnect();
    };
  }, []);

  //css transition

  const defaultStyle = {
    transition: `height ${duration}ms ${timingFunction}`,
    height: 0,
    overflow: 'hidden',
  };

  const transitionStyles = {
    entering: {
      height,
    },
    entered: {
      height,
    },
    exiting: { height: 0 },
    exited: { height: 0 },
  };
  // css transition
  return (
    <Transition in={visible} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...style,
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div ref={divRef} style={{ overflow: 'hidden' }}>
            {children}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default AnimationShow;

`````

