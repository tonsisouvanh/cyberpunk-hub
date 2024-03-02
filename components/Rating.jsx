import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ value, text, color = "#222222", iconStyle = "" }) => {
  return (
    <>
      <div className={"flex items-center gap-1"}>
        <span className={iconStyle} style={{ color }}>
          {value >= 1 ? (
            <FaStar />
          ) : value >= 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span className={iconStyle} style={{ color }}>
          {value >= 2 ? (
            <FaStar />
          ) : value >= 1.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span className={iconStyle} style={{ color }}>
          {value >= 3 ? (
            <FaStar />
          ) : value >= 2.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span className={iconStyle} style={{ color }}>
          {value >= 4 ? (
            <FaStar />
          ) : value >= 3.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span className={iconStyle} style={{ color }}>
          {value >= 5 ? (
            <FaStar />
          ) : value >= 4.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span className="ml-2">{text && text}</span>
      </div>
    </>
  );
};

export default Rating;
