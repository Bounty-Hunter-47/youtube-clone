import React, { Fragment, useState } from 'react';
import Comment from './Comment';

const CommentList = (props) => {

  const { comments } = props;
  const [showReplies, setShowReplies] = useState(false);

  console.log("props", props);
  if (!comments || comments.length <= 0) {
    return "loading comments...";
  }
  return (
    <div className='flex flex-col gap-4 border-2 border-l-black ml-6'>
      {
        comments.map((comment, index) => {
          return (
            <Fragment key={index}>
              {
                props?.replies
                  ? <Comment comment={comment?.snippet} />
                  : <Comment comment={comment?.snippet?.topLevelComment?.snippet} />
              }
              {
                (comment?.replies?.comments && comment?.replies?.comments.length > 0) &&
                <>
                  <div className='w-full flex justify-start'>
                    <button
                      className='p-2 bg-blue-500 px-7 rounded-full ml-2'
                      onClick={() => { setShowReplies(!showReplies) }}
                    >{showReplies ? "Hide replies" : "Show replies"}</button>
                  </div>
                  {showReplies && <CommentList replies={true} comments={comment?.replies?.comments} />}
                </>
              }
            </Fragment>
          )
        })
      }
    </div>
  )
}

export default CommentList
