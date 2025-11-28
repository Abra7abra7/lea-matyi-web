import React from 'react';

interface ListItem {
  type: string;
  items: string[];
}

interface ContentBlockProps {
  paragraphs?: string[];
  lists?: ListItem[];
}

export function ContentBlock({ paragraphs, lists }: ContentBlockProps) {
  return (
    <div className="space-y-6">
      {/* Paragraphs */}
      {paragraphs?.map((paragraph, index) => (
        <p
          key={`p-${index}`}
          className="text-lg leading-relaxed text-gray-700"
        >
          {paragraph}
        </p>
      ))}

      {/* Lists */}
      {lists?.map((list, listIndex) => {
        const ListTag = list.type === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag
            key={`list-${listIndex}`}
            className={`space-y-2 ${
              list.type === 'ordered' ? 'list-decimal' : 'list-disc'
            } ml-6 text-gray-700`}
          >
            {list.items?.map((item, itemIndex) => (
              <li key={`item-${itemIndex}`} className="text-lg">
                {item}
              </li>
            ))}
          </ListTag>
        );
      })}
    </div>
  );
}

