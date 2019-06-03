import * as React from "react";
import { useTheme } from "@insta/ui";

export const Form: React.FC = React.memo(() => {
  const { colors } = useTheme();

  const handleFormSubmit = React.useCallback((event: React.FormEvent) => {
    event.preventDefault();
  }, []);

  return (
    <form
      onSubmit={handleFormSubmit}
      css={{
        display: "flex",
        flexDirection: "row",
        borderTop: `1px solid ${colors.light_grey}`,
        padding: "10px 15px"
      }}
    >
      <input
        css={{
          flex: 1,
          border: "none",
          padding: 5,
          marginLeft: -5
        }}
        type="text"
        placeholder="Add a comment..."
      />

      <button
        css={{
          background: "transparent",
          color: colors.light_blue,
          opacity: 0.75,
          border: "none",
          marginLeft: 15,
          cursor: "pointer",
          transition: "opacity .15s",
          ":hover": { opacity: 1 }
        }}
      >
        Post
      </button>
    </form>
  );
});

Form.displayName = "CommentForm";
