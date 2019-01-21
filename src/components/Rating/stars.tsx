import React, { FunctionComponent } from 'react';

export const Star: FunctionComponent<{ full?: boolean; half?: boolean }> = ({
  full,
  half
}) => {
  const getPath = (full, half) => {
    if (full) {
      return `M12 .587l3.668 7.568L24 9.306l-6.064 5.828 1.48 8.279L12 19.446l-7.417 3.967 1.481-8.279L0
        9.306l8.332-1.151z`;
    } else if (half) {
      return `M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27L12 17.178V5.173zm0-4.586L8.332 8.155 0 9.306l6.064
        5.828-1.48 8.279L12 19.446l7.416 3.966-1.48-8.279L24 9.306l-8.332-1.15L12 .587z`;
    } else {
      return `M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27L12 17.178l-4.721 2.525.942-5.27-3.861-3.71
        5.305-.733L12 5.173zm0-4.586L8.332 8.155 0 9.306l6.064 5.828-1.48 8.279L12 19.446l7.416 3.966-1.48-8.279L24
        9.306l-8.332-1.15L12 .587z`;
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg">
      <path d={getPath(full, half)} />
    </svg>
  );
};
