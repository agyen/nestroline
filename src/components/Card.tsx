import React from 'react';

interface CardProps {
  title: string;
  body: string;
  href: string;
}

export const Card: React.FC<CardProps> = ({ href, title, body }) => {
  return (
    <li className="link-card list-none flex p-[1px] bg-[#23262d] rounded-[7px] transition-[background-position] duration-600 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
      <a 
        href={href}
        className="w-full no-underline leading-[1.4] p-[calc(1.5rem-1px)] rounded-[8px] text-white bg-[#23262d] opacity-80"
      >
        <h2 className="m-0 text-[1.25rem] transition-colors duration-600">
          {title}
          <span>&rarr;</span>
        </h2>
        <p className="mt-2 mb-0">
          {body}
        </p>
      </a>
    </li>
  );
};