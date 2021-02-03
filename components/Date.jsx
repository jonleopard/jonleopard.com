import * as React from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import 'twin.macro';

function FormatDate({ text, dateString }) {
  return (
    <>
      <div tw="text-sm font-medium text-gray-500">
        {text}
        <time dateTime={dateString}>
          {format(new Date(dateString), 'MMMM co, yyyy')}
        </time>
      </div>
    </>
  );
}

function DateDistance({ text, dateString }) {
  return (
    <>
      <div tw="text-sm font-medium text-gray-500">
        <span>{text}</span>
        <time dateTime={dateString}>
          {formatDistanceToNow(new Date(dateString), {
            addSuffix: true,
          })}
        </time>
      </div>
    </>
  );
}

export { FormatDate, DateDistance };
