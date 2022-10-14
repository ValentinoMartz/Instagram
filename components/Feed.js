import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div>
      <section className="mt-4">
        {/* Stories */}
        <Stories />
        {/* Post */}
        <Posts />
      </section>
      <section>
        {/* MiniProfile */}
        {/* Suggestion */}
      </section>
    </div>
  );
};

export default Feed;
