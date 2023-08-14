import './comment.scss'
import CommentIcon from "../../assets/icons/add_comment.svg"


const Comments = ({ comments }) => {
    
    

    return (
        <div className="comment">
            <form className='comments__form-container'>
                <label htmlFor="comment" className="comments__label">Join the Conversation</label>
                <textarea name="comment" id="comment" className="comments__input" placeholder="Add a new comment"></textarea>
                <button className="button button__comment" type="submit"><img src={CommentIcon} alt="comment icon" className="button__comment-icon" />Comment</button>
                <div className="button__comment-icon button--hidden"></div>
            </form>

            {comments.map((comment) => (
                <section key={comment.id} className="comment">
                    <div className='comment__profile'></div>
                    <div>
                    <div className='comment__new'>
                        <p className="comment__name">{comment.name}</p>
                        <p className="comment__likes">{comment.timestamp}</p>
                    </div>
                    </div>
                    <p className="comment__content">{comment.comment}</p>



                </section>
            ))}

        </div>
    )
};

export default Comments;
