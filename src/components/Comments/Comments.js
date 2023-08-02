import './comment.scss'


const Comments = ({comments}) => {

    console.log('this is the comments component',comments)
    return (
        <div className="comment">
        <h2 className="comment__title">Comment</h2>
        <form />
        {comments.map((comment) => (
        <section key={comment.id} className="comment">
            <p className="comment__name">{comment.name}</p>
            <p className="comment__content">{comment.comment}</p>
            <p className="comment__likes">{comment.likes}</p>
            
            
        </section>
        ))}

        </div>
)
    };

    export default Comments;
