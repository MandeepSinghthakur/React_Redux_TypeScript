import { useState } from 'react';
import './read-more.css'
// @ts-ignore
const ReadMore: React.FC = ({ children  }) => {
  const text = children || '';
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {/*@ts-ignore*/}
      {isReadMore ? text.slice(0, 10) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};
export default ReadMore