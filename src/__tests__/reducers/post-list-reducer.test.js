import postListReducer from '../../reducers/post-list-reducer';

describe('postListReducer', () => {
  let action;
  const currentState = {
    1: { user: 'Test User',
      title: 'Test Title',
      body: 'Test Body',
      upvotes: 'Test upvotes',
      id: 1 
    },
    2: { user: 'Test User2',
      title: 'Test Title2',
      body: 'Test Body2',
      upvotes: 'Test upvotes2',
      id: 2 
    }
  }
  
  const postData = {
    user: 'Test User',
    title: 'Test Title',
    body: 'Test Body',
    upvotes: 'Test upvotes',
    id: 1
  };
  
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(postListReducer({}, { type: null })).toEqual({})
  });

  test('Should successfully add new post data to masterPostList', () => {
    const { user, title, body, upvotes, id } = postData;
      action = {
        type: 'ADD_POST',
        user: user,
        title: title,
        body: body,
        upvotes: upvotes,
        id: 1
      };

    expect(postListReducer({}, action)).toEqual({
      [id]: {
        user: user,
        title: title,
        body: body,
        upvotes: upvotes,
        id: id
      }
    });
  });
});