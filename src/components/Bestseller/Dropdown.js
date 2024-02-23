import React, { useEffect } from "react";
import "/src/styles/bestseller/font.scss";
import "/src/styles/bestseller/New.scss";

export const Dropdown = props => {
  const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
  const [repeat, setRepeat] = React.useState(null);

  useEffect(() => {
    if (props.visibility) {
      clearTimeout(repeat);
      setRepeat(null);
      setVisibilityAnimation(true);
    } else {
      setRepeat(
        setTimeout(() => {
          setVisibilityAnimation(false);
        }, 400)
      );
    }
  }, [props.visibility]);

  return <article className={`components-dropdown ${props.visibility ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown"}`}>{visibilityAnimation && props.children}</article>;
};
