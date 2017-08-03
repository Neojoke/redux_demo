
const combineReducers = (reduces)=>{
  return (state,action)=>{
    return Object.keys(reduces).reduce((nextState,key)=>{
      nextState[key] = reduces[key](state[key], action)
    },{})
  }
}

// const chatReducer = (state = defaultState, action={})=>{
//   const {type, payload} = action;
//   switch (type) {
//     case ADD_CHAT:
//       return Object.assign({},state,{
//         chatLog:state.chatLog.concat(payload)
//       });
//     case CHANGE_STATUS:
//       return Object.assign({},state,{
//         statusMessage:payload
//       });
//     case CHANGE_USERNAME:
//       return Object.assign({},state,{
//         userName:payload
//       });
//     default:
//       return state;
//   }
// };
const chatLog = (state='',action)=>{
  switch (action.type) {
    case ADD_CHAT:
      return action.payload;
    default:
      return state;
  }
};
const statusMessage = (state='',action)=>{
  switch (action.type) {
    case CHANGE_STATUS:
      return action.payload;
    default:
      return state;
  }
}
const userName = (state='',action)=>{
  switch (action.type) {
    case CHANGE_USERNAME:
      return action.payload;
    default:
      return state;
  }
}
const chatReducer = combineReducers({
  chatLog,
  statusMessage,
  userName
});
const key1 = 'key1';
const key2 = 'key2';
const key3 = 'key3';
const a = {
    key1,
    key2,
    key3
}
const b = a.keys.reduce((sum,next)=>{
    sum[next] = a[next]
},{});
console.log(b);