### Observer Pattern:
- Enforces SOC and Single responsibility principle.
- Observers are not tightly coupled and can be modified as and when needed.
- Responsible for monitoring events and notifting subscribers.

<img width="1029" alt="Screenshot 2023-06-10 at 3 41 43 PM" src="https://github.com/sakp-tech/frontend/assets/61321907/334adfcc-bf12-4040-9d51-677370455b84">
<img width="938" alt="Screenshot 2023-06-10 at 3 41 56 PM" src="https://github.com/sakp-tech/frontend/assets/61321907/f9c34bfb-f7af-4ba0-8264-70e875839791">

```

class Observable {
  constructor() {
    this.observers = [];
  }
  
  // @param: array of observers
  subscribe(observers) {
    this.observers.push(...observers);
  }
  // @param: single observer function that should be removed from list
  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // @param: data that needs to be sent to subscribers
  notify(data){
    this.observers.forEach((observer) => observer(data));
  }
}

const cobs = new Observable();

function logger(data) {
  console.log("Logger data: ", data);
}
function Toaster(data) {
  console.log('Toasted: ', data);
}

cobs.subscribe([logger, Toaster]);


function handleClick() {
  cobs.notify("Oh clicked");
}

handleClick();
```
