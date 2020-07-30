export default (safe)=>{
    console.log(safe) //vue的this对象
    return {
      index: true,
      align: 'center',
      headerAlign: 'center',
      border: true,
      stripe: true,
      column: [{
        label: "username",
        prop: "username",
        search: true,
        rules: [{
          required: true,
          message: "请输入用户名(username)",
          trigger: "blur"
        }]
      }, {
        label: "userMail",
        prop: "userMail",
        search: true,
        rules: [{
          required: true,
          message: "请输入用户邮箱(userMail)",
          trigger: "blur"
        }]
      }, {
        label: "userPhone",
        prop: "userPhone",
        search: true,
        rules: [{
          required: true,
          message: "请输入电话(userPhone)",
          trigger: "blur"
        }]
      }, 
      {
        label: "userPower",
        prop: "userPower",
        search: true,
        rules: [{
          required: true,
          message: "请输入用户权限(userPower)",
          trigger: "blur"
        }]
      },
      {
        label: "userStop",
        prop: "userStop",
        search: true,
        rules: [{
          required: true,
          message: "封停(1表示封)",
          trigger: "blur"
        }]
      },
    ],
    }
  }