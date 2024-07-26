import React, { useEffect } from 'react'
import CommentList from './CommentList';
import { GET_COMMENTS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../utils/commentSlice';

const CommentsContainer = ({ id }) => {

  useEffect(() => {
    getComments(id);
  }, [id])

  const dispatch = useDispatch();
  const getComments = async (videoId) => {
    try {
      const data = await fetch(GET_COMMENTS + '&videoId=' + videoId);
      if (!data.ok) {
        console.log("response not ok");
        throw new Error(`HTTP error! status: ${data.error}`);
      }
      const json = await data.json();
      console.log(json);
      dispatch(addComment({ [videoId]: json?.items }));
    } catch (error) {
      console.log(error);
    }
  }

  const comments = useSelector(store => store.comments[id]);

  return (
    <div className='mt-10'>
      <h1 className='text-3xl font-bold mb-2'>Comments: </h1>
      <CommentList comments={comments} />
    </div>
  )
}

export default CommentsContainer
