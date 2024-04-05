import comment from '../assets/Images/commentSmall.png';
import like from '../assets/Images/likeSmall.png';
const TextCard = ({header, text, comments,likes}) => {
    return  <div className="textCardMain">
                <h2>{header}</h2>
                <div className="text">{text}</div>
                <div className='bottom'>
                    <span className="comments">
                        <img src={comment} alt='comments'/>
                        <b>{comments}</b>
                    </span>
                    <span className="likes">
                        <img src={like} alt='comments'/>
                        <b>{likes}k</b>
                    </span>
                </div>
            </div>
};

export default TextCard;