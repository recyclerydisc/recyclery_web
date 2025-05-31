import { useEffect, useState } from 'react';
import { EditHoursButton } from './edit-hours-button.tsx';

interface EditableHoursTextProps {
  hoursId: string;
  defaultText: string;
  className?: string;
  textTag?: keyof JSX.IntrinsicElements; // Allows specifying 'span', 'div', 'p', etc.
}

export function EditableHoursText({
  hoursId,
  defaultText,
  className = '',
  textTag: TextTag = 'span', // Default to 'span' if not provided
}: EditableHoursTextProps) {
  const [displayText, setDisplayText] = useState<string>(defaultText);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (!hoursId || !backendUrl) {
      setDisplayText(defaultText);
      return;
    }

    fetch(`${backendUrl}/hours/${hoursId}`)
      .then(res => {
        if (!res.ok) {
          console.error(`Failed to fetch hours for ID ${hoursId}, status: ${res.status}`);
          setDisplayText(defaultText); // Fallback to default text
          // Optionally, throw an error or return a specific marker
          return Promise.reject(new Error(`HTTP error! status: ${res.status}`));
        }
        return res.json();
      })
      .then(data => {
        if (data?.hours_text) {
          setDisplayText(data.hours_text);
        } else {
          // If data is not in expected format, or hours_text is missing
          console.warn(`Hours data for ID ${hoursId} not in expected format or missing 'hours_text'. Using default.`);
          setDisplayText(defaultText);
        }
      })
      .catch(err => {
        // This catch block handles network errors and errors from res.json() or the !res.ok path
        console.error(`Error fetching or parsing hours for ID ${hoursId}:`, err.message);
        setDisplayText(defaultText); // Fallback to default text on any error
      });
  }, [hoursId, defaultText, backendUrl]);

  return (
    <div className="relative group inline-block"> {/* 'inline-block' allows text to flow while being a positioning context */}
      <TextTag className={className}>{displayText}</TextTag>
      {(
        <EditHoursButton
          id={hoursId}
          // This className is passed to the <button> inside EditLink from edit-hours-button.tsx
          // It makes the button appear on hover of the parent div.
          // The button's own 'absolute bottom-4 right-4' styling will position it within this relative div.
          className="opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100"
        />
      )}
    </div>
  );
}