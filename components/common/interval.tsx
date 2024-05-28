'use client';
import { useState } from 'react';
import ReactInterval from 'react-interval';

type Props = {
  seconds: number;
  interval: number;
  enabled?: boolean;
  cb: () => void;
};

export function Interval(props: Props) {
  const { interval, seconds, cb, enabled } = props;

  const isEnabled = typeof enabled !== "undefined" ? enabled : (seconds > 0);

  return (
    <>
      {seconds}
      <ReactInterval timeout={interval} enabled={isEnabled} callback={cb} />
    </>
  );
}
