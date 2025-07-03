p0E = 100;
p1E = 100;

f = (state,action)=>{
 let player = []
 let [e0,e1,pot,legal_actions] = [state.e0,state.e1,state.pot,state.legal_actions];
 let [turn,call_size] = [state.turn,state.call_size];
 let ammount = action[1];
 if(!legal_actions.includes(action[0]))return 'bad action';
 
 let get_actions = [];
 get_actions['bet'] = 'raise call fold'.split(' ');
 get_actions['raise'] = 'raise call fold'.split(' ');
 get_actions['check'] = 'bet check'.split(' ');
 
 
 if(action[0] == 'bet')
   return {pot:pot+ammount,e0:e0-ammount,e1:e1,legal_actions:get_actions['bet']};

 if(action[0] == 'check')
   return {pot:pot,e0:e0,e1:e1,legal_actions:get_actions['check']};

 if(action[0] == 'raise')
   return {pot:pot+ammount,e0:e0-ammount,e1:e1,legal_actions:get_actions['raise']};

 return 'wtf';
}

state = {pot:0,e0:100,e1:100,legal_actions:['check','bet']};
console.log('next state is ');
console.log(f(state,['bet',10]));


