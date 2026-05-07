"use client";

import { useEffect, useState } from "react";

interface ProtectedEmailProps {
  email: string;
  title?: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function ProtectedEmail({ email, title, style, className }: ProtectedEmailProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <a href={`mailto:${email}`} title={title} style={style} className={className}>
      {email}
    </a>
  );
}
