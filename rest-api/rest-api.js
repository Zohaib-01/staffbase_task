export class RestAPI {
  constructor({ users = [] }) {
    this.db = users;
  }

  //Get method to return all users or requested users by query paramerter
  get(url) {
    let response = { users: [] };
    if (url === "/users") {
      return { users: this.db };
    }
    let users = url.split("=")[1];
    users = users.split(",");
    for (let i = 0; i < users.length; i++) {
      for (let user of this.db) {
        if (user.name == users[i]) {
          response.users.push(user);
        }
      }
    }
    return response;
  }

  //Post method to create user or to add iou
  post(url, payload) {
    if (url === "/add") {
      let addUser = {
        name: payload.user,
        owes: {},
        owed_by: {},
        balance: 0,
      };

      this.db.push(addUser);
      return addUser;
    }
    if (url === "/iou") {
      var lender = payload.lender;
      var borrower = payload.borrower;
      var amount = payload.amount;
      var response = { users: [] };

      //iterating over the users in DB
      for (let user of this.db) {
        //Checking lender user in DB
        if (user.name == lender) {
          let lender = user;
          if (lender.owes[borrower]) {
            const difference = lender.owes[borrower] - amount;
            if (difference < 0) {
              delete lender.owes[borrower];
              lender.owed_by[borrower] = -difference;
            } else if (difference > 0) {
              lender.owes[borrower] -= amount;
            } else {
              delete lender.owes[borrower];
            }
          } else {
            lender.owed_by[borrower] = (lender.owed_by[borrower] || 0) + amount;
          }
          lender.balance += amount;
          response.users.push(lender);
        }
        //Checking borrowser user in DB
        if (user.name == borrower) {
          let borrower = user;
          if (borrower.owed_by[lender]) {
            const difference = borrower.owed_by[lender] - amount;
            if (difference < 0) {
              delete borrower.owed_by[lender];
              borrower.owes[lender] = -difference;
            } else if (difference > 0) {
              borrower.owed_by[lender] -= amount;
            } else {
              delete borrower.owed_by[lender];
            }
          } else {
            borrower.owes[lender] = (borrower.owes[lender] || 0) + amount;
          }
          borrower.balance -= amount;
          response.users.push(borrower);
        }
      }
      return response;
    }
  }
}
