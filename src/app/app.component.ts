import { inviteservive } from './services/invite.service';
import { deleteuser } from './services/deleteuser.service';
import { HttpClient } from '@angular/common/http';
import { creategroupmsg } from './services/creategroupmsg.service';
import { groupmsg } from './services/groupmsg.service';
import { getusergroup } from './services/getusergroup.service';
import { createdesk } from './services/createdesk.service';
import { createuser } from './services/createuser.service';
import { authlogin } from './services/authlogin.service';
import { finalize, isObservable, observable } from 'rxjs';
import { SocketioService } from './socketio.service';
import { SendService } from './services/send.service';
import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { ActivatedRoute } from "@angular/router";

import { SimplePeer } from "simple-peer"
import { Instance, SignalData } from 'simple-peer';
import { MessagesService } from './services/messages.service';
import { Router } from "@angular/router";
import { Socket } from 'ngx-socket-io';
import { clickget } from './services/clickget.service';
import { AngularFireStorage, AngularFireStorageModule } from '@angular/fire/compat/storage'

import { Observable, Observer } from "rxjs";
import { LastService } from './services/last.service';
import { deletemsg } from './services/deletemsg.service';
import { delgmsg } from './services/delgmsg.service';
import { callv } from './services/callv.service';
import { updatemsg } from './services/updatemsg.service';
import { updmsg } from './services/updmsg.service';
import { allowedservice } from './services/allowed.service';
import { deleteinv } from './services/deleteinvite.service';


declare const Peer: any;

declare const SimplePeer: import('simple-peer').SimplePeer;
let peer2 = new SimplePeer()
interface VideoElement {
  muted: boolean;
  srcObject: MediaStream;
  userId: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './profile/profile.component.css']
})
export class AppComponent implements OnInit {
  currentUserId: string = "asdsadsadasdsadsad";
  videos: VideoElement[] = [];
  title = 'frontend';
  addbtn2 = "addbtn"
  addbtn3 = "addbtnno"
  addbtn4 = "addbtnno"
  addbtn5 = "addbtnno"
  message: any = ""
  user = localStorage.getItem("myid")
  
  usera:any = localStorage.getItem("myid")?.toString()
  posts: any;
  messages: any;
  calling: String = "calling2"
  login: Number = 5
  callvideo: String = "callvideo2";
  lastactive: String = ""
  name: any
  username: String = "";
  password: String = ""
  deskusers: any
  desk: any = "deskx2"
  
  deskus: any = "deskx2"
  
  deskus2: any = "deskx2"
  showin(){
    this.deskus2='deskx'
  }
  hidein(){
    
    this.deskus2='deskx2'
  }
  deskxh:any="deskxh3"
  userlist: Array<{ username: any, userid: any }> = [];
  deskname: String = ""
  grouplist: any
  currentroom: any
  warn:any='warn2'
  showfilex:any='showfile2'
  reportmenu: String = "reportmenu2"
  activeroom: String = ""
  deskx:any="deskx2"
  
  deskxn:any="deskx2"
  showfile(){
    this.showfilex='showfile'
  }
hidefile(){
    this.showfilex='showfile2'
  }
  closereporat(){
    this.desk="deskx2"
  }
  
  showe(){
    this.deskus="deskx"
  }
  closereporatx(){
    this.deskus="deskx2"
  }
  hidedeska() {
    
    alert("Message sent")
    this.deskxn = "deskx2"
  }
  showwarn(){
    this.warn='warn'
  }
  
  hidewarn(){
    this.warn='warn2'
  }
  tempmsg:any
  curid:any
  newmsg(val:any){
    this.tempmsg=val.target.value

  }

  hidedeskaa() {
    
    alert("Message updated")
    this.editmsg2 = "deskx2"
    var da={
      message:this.tempmsg,
      _id:this.curid

    }
    if(this.activeroom==='chat'){
var ai=0


      
      const repeat = () => {

        setTimeout(() => {


          if (ai === 2) return
          else if (ai === 0) {

            this.updatems.createdesk(da).subscribe(res=>
              {
                console.log(res)
              })

          }
          else if (ai === 1) {


            console.log(ai)
            var getusermsg = {

              senderid: this.user,
              recid: this.curruser

            }


            this.usermsgservice.getmessage(getusermsg)
              .subscribe(response => {
                console.log(response)
                this.messages = response
                this.socket.emit('my message', this.curruser);
                this.message=''

              })
          }
          ai = ai + 1
          repeat();
        }, 500);
      }

      repeat()
    }
    else{
        ai=0
      
      const repeat = () => {

        setTimeout(() => {


          if (ai === 2) return
          else if (ai === 0) {


            this.upd.createdesk(da).subscribe(res=>
              {
                console.log(res)
              })
      
          }
          else if (ai === 1) {

            this.groupmsgservice.getgroupmsg(this.currrom)
            .subscribe(response => {
              this.messages = response
      
      
            })
          }
          ai = ai + 1
          repeat();
        }, 500);
      }

      repeat()
    }
  }
  showdeskmenu2a() {
    
    this.closereport()
    this.deskxn = "deskx"
  }
  showdeskmenu() {
    this.desk = "deskx"
  }
  hidedesk() {
    this.deskx = "deskx2"
  }
  showdeskmenu2() {
    this.closereport()
    this.deskx = "deskx"
  }
  ctime() {
    var as = new Date
    var a = localStorage.getItem("myid")
    var e = as.getHours().toString() + ":" + as.getMinutes().toString()
    console.log(e)

    var hero = {
      id: a,
      time: e
    }
    this.lastservice.updatelastactive(hero)
      .subscribe(responce => {
        console.log(responce)
      })
  }
  register() {

    var userdata = {
      username: this.username,
      password: this.password,
      name: this.name,
      lastactive: "11:00"

    }
    this.createuserservice.createuser(userdata)
      .subscribe(responce => {
        this.login = 1
      })
  }
  logout() {
    localStorage.removeItem("myid")
    window.location.reload()
  }
  closereport() {

    this.reportmenu = "reportmenu2"
  }
  report() {
    this.reportmenu = "reportmenu"
  }
  createdesk() {
    if(this.userlist.length<=1){
      alert("Please add at least 1 members")
    }
    else{
      if(this.deskname.length===0){
        this.deskxh='deskxh2'
      }
      else{
        
    var deskspace = {
      name: this.deskname,
      users: this.userlist

    }
    this.deskservice.createdesk(deskspace)
      .subscribe((response: any) => {

        console.log(response)

        window.location.reload()
      }
      )
    this.desk = "deskx2"
      }
    }
  }
  nhj:any=localStorage.getItem('name')
  addusers(value: any, id: any) {
    var i = 9
    var temp = {
      username: value,
      userid: id
    }
    this.userlist.forEach((val) => {
      if (val.userid === id) {
        this.userlist.filter(vala => vala !== val.userid)
        i = 5
        this.userlist = this.userlist.filter(data => data.userid != val.userid);

      }

    })
    if (i === 9) {

      this.userlist.push(temp)
    }

    console.log(this.userlist)
  }
  home() {

    var userx = {
      username: this.username,
      password: this.password

    }


    this.loginservice.authenticateuser(userx)
      .subscribe((response: any) => {
        if (response != null) {

          console.log(response._id)
          this.login = 0
          localStorage.setItem("myid", response._id)
          
          localStorage.setItem("name", response.name)
          this.ctime()
          window.location.reload()
        }
        else if (response === null) {
          alert("Invalid credentials")
        }

      })

  }
  logins() {



    this.login = 1





  }
  signup() {
    this.login = 2
  }
  images: any = Observable<HTMLImageElement[]>;

  constructor(
    private deleteinv:deleteinv,
    private inviteservice:inviteservive,
    private allowedservice:allowedservice,
    private lastservice: LastService,
    private httpclient: HttpClient,
    private deletemsgs:deletemsg ,
    private deleteussr:deleteuser ,
    private creategroupmsgservice: creategroupmsg,
    private groupmsgservice: groupmsg,
    private deskservice: createdesk,
    private loginservice: authlogin,
    private usermsgservice: clickget,
    private createuserservice: createuser,
    private socket: Socket,
    private router: Router,
    private socketservice: SocketioService,
    private service: PostService,
    private service2: MessagesService,
    private service3: SendService,
    private getgroupservice: getusergroup,
    private storage: AngularFireStorage,
    private delgroupmsg:delgmsg,
    private callcc:callv,
    private updatems:updatemsg,
    private upd:updmsg,

  ) { }
  filename:any='File'
  downloadURL: any
  fb: any
  msgchat: String = "msgchat4"
  code: String = "filexrcfd"
  filex:any
  stype:any

  uploadfile(val: any) {
    this.filename=val.target.files[0].name
this.stype='file'
    this.filex=val
this.showfile()

/*
var fileref="asdsad"
    const tempfile= val.target.files[0]
    const fileref2= this.storage.ref(fileref)
    this.storage.upload(fileref,tempfile)
    .snapshotChanges().pipe(
   
    ).subscribe();
    */}




  curruser: any = ""
  changeclass(val2w:any){
    var bnm: any[]=[]
    this.messages.forEach((val:any) => {
      if(val._id===val2w&&val.class==='dltmsg2'){
        val = { ...val, class: 'dltmsg'};
 
      }
      else{
        val = { ...val, class: 'dltmsg2'};
      }
      
      bnm.push(val)
      
    });
  
    this.messages=bnm

  }
  deletemsg(val:any){
    var bnm: any[]=[]
    this.messages.forEach((val2:any) => {
      if(val2._id!=val){
        bnm.push(val2)
      }

      
      
    });
  console.log(bnm)
    this.messages=bnm

    var jso={
      _id:val

    }
if(this.activeroom==='chat'){
  this.deletemsgs.getgroups(jso)
  .subscribe(response => {

    console.log(response)



  })
}
else{
  this.delgroupmsg.getgroups(jso)
  .subscribe(response => {

    console.log(response)



  })


}
  }
  
  async deleteusr(){
    var jso={
      _id:this.user

    }
var ai=0
    
    const repeat = () => {

      setTimeout(() => {
        if (ai === 2) return
        else if (ai === 0) {

          this.deleteussr.deluser(jso).subscribe()

        }
        else if (ai === 1) {


          this.logout()

        }
        ai = ai + 1
        repeat();
      }, 200);
    }

    repeat()



  
   
    
  }
  
  getmsg(value: String, name: any, last: any) {

    this.side = "side"
    var getusermsg = {

      senderid: this.user,
      recid: value

    }
    this.activeroom = "chat"
    this.curruser = value
    this.usermsgservice.getmessage(getusermsg)
      .subscribe(response => {

        this.messages = response
        var bnm: any[]=[]
        this.messages.forEach((val:any) => {
          val = { ...val, class: 'dltmsg2'};
       bnm.push(val)
          
          
          
        });
        this.messages=bnm
      


      })
      var pussh={
        username:name

      }
      this.parts=[]
      this.parts.push(pussh)
         this.currentroom = {
      name: name,
      participants: "last active " + last
    }
  }
  video: String = "video Call Started"
currrom:any
  setroom(val: any) {
    
    this.side = "side"
    this.activeroom = "group"
    var temproom = {
      id: val,
      name: "",
      participants: "0"
    }

    var temp = {
      deskid: val
    }
    this.currrom=temp
    this.groupmsgservice.getgroupmsg(temp)
      .subscribe(response => {
        this.messages = response

      })



    this.grouplist.forEach((val2: any) => {
      if (val2._id === val) {
        temproom.name = val2.name
        temproom.participants = "Participants " + val2.users.length.toString()
        this.currentroom = temproom
        console.log(val2.users)
        this.parts=val2.users
        console.log(this.parts)

      }


    })

  }
  
  parts: Array<{ username:any }> = [];
  joinmeeting(val: any) {
    window.location.href = val[1]
  }

  create() {
    if (this.activeroom === "chat") {

      navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      })
        .catch((err) => {
          console.error('[Error] Not able to retrieve user media:', err);
          return null;
        })
        .then((stream: any) => {


          this.peer = new SimplePeer({
            initiator: true,
            trickle: false,
            stream: stream
          })
          this.peer.on('signal', (data: any) => {
            console.log(JSON.stringify(data))
            this.tpear = JSON.stringify(data)

            this.socketservice.sendcallto(this.curruser, this.tpear, this.user)
          })
          this.peer.on('data', (data: any) => {

          })

          this.peer.on('stream', (stream: any) => {
            this.videos.push({
              muted: false,
              srcObject: stream,
              userId: "123456",
            });

          })

          this.peer.on('close', function () {
            console.log('close');
          });







        });
    }

    else {
      var po="https://server.quickdex.net/?room="+Date.now().toString()
      this.message = "video Call Started"+po
      let ai = 0
      this.data2 = {
        senderid: this.user,
        deskspaceid: this.currentroom.id,
        sendername: "usama",
        message: this.message
      }

      const repeat = () => {

        setTimeout(() => {
          if (ai === 2) return
          else if (ai === 0) {

            console.log(this.data2)
            this.creategroupmsgservice.createuser(this.data2)
              .subscribe(hero => {/*
var a: any = localStorage.getItem("myid")
this.socketservice.sendmessageto(this.curruser)
*/


              })

          }
          else if (ai === 1) {


            var getusermsg = {

              deskid: this.currentroom.id,

            }
            this.groupmsgservice.getgroupmsg(getusermsg)
              .subscribe(response => {
                console.log(response)

                this.messages = response


                this.socket.emit('newgroupmsg', this.currentroom.id);

                window.location.href = po            })
          }
          ai = ai + 1
          repeat();
        }, 100);
      }

      repeat()


    }








  }
  editmsg2:any="deskx2"

editmsg(val:any){
  console.log(val)
  this.curid=val
  this.editmsg2="deskx"
  this.changeclass(val)
}

  submit2() {

    this.addbtn3 = "addbtn3"

    this.addbtn4 = "addbtn4"

    this.addbtn5 = "addbtn5"

  }
  data = {
    senderid: this.user,
    recid: this.curruser,
    sendername: "usama",
    message: this.message
  }

  data2 = {
    senderid: this.user,
    deskspaceid: "",
    sendername: "usama",
    message: this.message
  }

  call() {
this.callcc.getmessage().subscribe(res=>{
  console.log(res)
});


  }


  nasme: String = "Mr";
  base64Image: any;






  getBase64ImageFromURL(url: string) {
    return this.images.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    if (ctx) {

      ctx.drawImage(img, 0, 0);
    }
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  downloadimage(val: any) {
    var ad = val.split("xrcfd")
    var a1 = "jpg"
    var a2 = "png"
    var a3 = "zip"
    var a4 = "docx"
    var a5 = "csv"

    var a6 = "video"
    console.log(ad[1])
    if (val.search(a2) > 0) {





    }

    else if (val.search(a6) > 0) {
      const blob = new Blob([ad[1]], { type: 'video\/mp4' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    }
    else if (val.search(a4) > 0) {
      const blob = new Blob([ad[1]], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    }
    else if (val.search(a3) > 0) {

      const blob = new Blob([ad[1]], { type: 'application/zip' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);

    }

    else if (val.search(a5) > 0) {

      const blob = new Blob([ad[1]], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      window.open(url);

    }




  }
  refresh() {
if(this.stype==='file'){
  
  this.msgchat = "msgchat3 uploas"

  const file = this.filex.target.files[0];
  var n = Date.now() + file.name;
  const filePath = `RoomsImages/${n}`;
  const fileRef = this.storage.ref(filePath);
  const task = this.storage.upload(`RoomsImages/${n}`, file);
  task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe((url: any) => {
          if (url) {
            this.fb = url;

            this.msgchat = "msgchat4"
          }
          console.log(this.fb);
          
          this.stype="asd"
          this.showfilex='showfile2'
          this.message = "filexrcfd"+'+'+this.filename+'+'+ this.fb
          
          this.refresh()

        });
      })
    )
    .subscribe(url => {
      if (url) {

      }
    });


}


else{
  
  if (this.activeroom === "chat"&&this.message.length>0) {
if(this.currentroom.participants!='No Chats yet!'){

  let ai = 0
  this.data = {
    senderid: this.user,
    recid: this.curruser,
    sendername: "usama",
    message: this.message
  }
  const repeat = () => {

    setTimeout(() => {


      if (ai === 2) return
      else if (ai === 0) {
        console.log(ai)
        this.service3.postmessage(this.data)
          .subscribe(hero => {
          })




      }
      else if (ai === 1) {


        console.log(ai)
        var getusermsg = {

          senderid: this.user,
          recid: this.curruser

        }


        this.usermsgservice.getmessage(getusermsg)
          .subscribe(response => {
            console.log(response)
            this.messages = response
            this.socket.emit('my message', this.curruser);
            this.message=''

          })
      }
      ai = ai + 1
      repeat();
    }, 500);
  }

  repeat()

}
else{
  alert('No chats yet!')
}


  }
  else if(this.activeroom === "group"&&this.message.length>0) {
    let ai = 0
    this.data2 = {
      senderid: this.user,
      deskspaceid: this.currentroom.id,
      sendername: "usama",
      message: this.message
    }

    const repeat = () => {

      setTimeout(() => {
        if (ai === 2) return
        else if (ai === 0) {

          console.log(this.data2)
          this.creategroupmsgservice.createuser(this.data2)
            .subscribe(hero => {/*
var a: any = localStorage.getItem("myid")
this.socketservice.sendmessageto(this.curruser)
*/


            })

        }
        else if (ai === 1) {
          this.message=''

          var getusermsg = {

            deskid: this.currentroom.id,

          }
          this.groupmsgservice.getgroupmsg(getusermsg)
            .subscribe(response => {
              console.log(response)

              this.messages = response


              this.socket.emit('newgroupmsg', this.currentroom.id);
         

            })
        }
        ai = ai + 1
        repeat();
      }, 500);
    }

    repeat()

  }
  else{
    alert("type message")
  }


}
  }

  ngOnDestroy() {
    this.socketservice.disconnect();
  }


  callername:any


  onLoadedMetadata(event: Event) {
    (event.target as HTMLVideoElement).play();
  }
  peer: any
  tpear: any
  params: any = "123456"
  initialcaller: boolean = false
  from: any
  aa: Number = 1
  ngOnInit() {
    var a = localStorage.getItem("myid")
    if (a) {
      this.login = 0

    }
    else {
      this.login = 1
    }
    this.socket.on('my broadcast', (data: string) => {
      console.log(data.toString())
      var c: any = a?.search(data)
      if (c >= 0) {


        var getusermsg = {

          senderid: a,
          recid: this.curruser

        }
        this.usermsgservice.getmessage(getusermsg)
          .subscribe(response => {
            console.log(response)

            this.messages = response


          })

      }
    });
    this.socket.on('calling', (data: string, peer: string, user: any) => {
      var c: any = a?.search(data)
      if (c >= 0) {


        this.calling = "calling"
        console.log("from" + user)
        this.posts.forEach((val:any) => {
          if(val._id===user){
            this.callername=val.name
          }
          
        });
        this.tpear = JSON.parse(peer)
        this.from = user





      }
    });
    this.socket.on('broadcastmsg', (id: String) => {
      if (this.currentroom.id === id) {
        var getusermsg = {

          deskid: id,

        }
        this.groupmsgservice.getgroupmsg(getusermsg)
          .subscribe(response => {
            console.log(response)

            this.messages = response



          })
      }
    })
    this.socket.on('recieved', (peer: string, user: any) => {
      var c: any = a?.search(user)
      if (c >= 0) {
        console.log("recieved")
        console.log(peer)

        this.tpear = peer
        this.connect()
      }



    });




    var tempaw = {
      username: "Alex",
      userid: a
    }

    this.userlist.push(tempaw)



    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    })
      .catch((err) => {
        console.error('[Error] Not able to retrieve user media:', err);
        return null;
      })
      .then((stream: any) => {


        this.peer = new SimplePeer({
          initiator: location.hash === "#1",
          trickle: false,
          stream: stream
        })




        this.peer.on('signal', (data: any) => {
          console.log(JSON.stringify(data))
          var a = JSON.stringify(data)
          this.socket.emit('answered', a, this.from)

        })


        this.peer.on('close', function () {
          console.log('close');
        });

        this.peer.on('stream', (stream: any) => {
          this.videos.push({
            muted: false,
            srcObject: stream,
            userId: "123456",
          });
        })

      });





    var groupmatch = {
      userid: a
    }
    var temproom = {
      id: "Asdasdsadsad",
      name: "",
      participants: 'No Chats yet!'
    }
    this.oo=1
    this.activeroom = "chat"
    this.currentroom = temproom
    this.getgroupservice.getgroups(groupmatch)
      .subscribe(response => {
        this.grouplist = response;
        console.log(response)
      })

    this.socketservice.setupSocketConnection();
    this.service.getPosts()
      .subscribe(response => {
        this.postsx=response
        this.posts2 = response;
        this.posts2.forEach((item:any) => {
          if(item._id===this.user){
this.invitelists=item.invite

this.invitelists.forEach((val,index)=>{
  var i=0;
  for(var j=index+1;j<this.invitelists.length;j++){
    if(this.invitelists[j].id===this.invitelists[index].id){
      i=1
    }


  }
  if(i===0){
    console.log(this.invitelists[index].id)
    this.invitelists2.push(val)

  }



})


            console.log(item.allowed)

            item.allowed.forEach((elem:any) => {

              this.posts2.forEach((element:any) => {
                if(element._id===elem.id){
                  this.userlists.push(element)
                }
                
              });


              
            });
            this.posts=this.userlists
            console.log(this.posts)
            if(this.userlists.length>=1){
              this.oo=0
            }
          }
          
        });

        this.currentroom = {
          name: this.posts[0].name,
          participants: "last active " + this.posts[0].lastactive
        }

      })

    this.service2.getmessages()
      .subscribe(response => {
        this.messages = null;



      })
  }
  sendinvite(){







    console.log(this.invitelists)

    var temp={
      id:this.inviteid,
      name:this.invitename,
      addid:this.user,
    }
    
    this.inviteservice.accept(temp).
    subscribe(res=>
      {
        console.log(res)
      })
      
      this.deskus='deskx2'
      alert('Invitaion sent')
  }
  invitename:any
  inviteid:any
  setinvite(name:any,id:any){
    console.log(name)
    console.log(id)
    this.invitename=localStorage.getItem('name')
    this.inviteid=id
  }
  accept(id:any){
  

    var ai=0
    
    const repeat = () => {

      setTimeout(() => {
        if (ai === 2) {
          alert("Invitation accepted")
          window.location.reload()
        }
        else if (ai === 0) {

          console.log(id)
          var temp={
            id:this.user,
            allowed:id,
          }
          this.allowedservice.accept(temp).
          subscribe(res=>
            {
              console.log(res)
            })
      
        }
        else if (ai === 1) {
          var temp2={
            id:this.user,
            deleteid:id,
          }
          this.deleteinv.accept(temp2)
          .subscribe(res=>
            {
              console.log(res)
            })



        }
        ai = ai + 1
        repeat();
      }, 200);
    }

    repeat()






  }

  deleteinvite(id:any){



    var ai=0
    
    const repeat = () => {

      setTimeout(() => {
        if (ai === 2) {
          alert("Invitation Deleted")
          window.location.reload()
        }
        else if (ai === 0) {


          var temp2={
            id:this.user,
            deleteid:id,
          }
          this.deleteinv.accept(temp2)
          .subscribe(res=>
            {
              console.log(res)
            })
      
      
        }
        else if (ai === 1) {



        }
        ai = ai + 1
        repeat();
      }, 200);
    }

    repeat()


  }
  oo:any=1
  userlists: Array<{ username: any }> = [];
  
  invitelists2: Array<{ name: any,id:any }> = [];
  invitelists: Array<{ name: any,id:any }> = [];
  posts2:any
  postsx:any
  searchtxt: String = ""
  i: any = 0
  side: String = "side"
  sidechange() {

      this.side = "side side2"
      this.i = 1
    
  }
  closeconm() {
this.calling='calling2'
    this.peer.destroy()
    this.peer = null
    this.videos = []
    this.callvideo = "callvideo2"


    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    })
      .catch((err) => {
        console.error('[Error] Not able to retrieve user media:', err);
        return null;
      })
      .then((stream: any) => {


        this.peer = new SimplePeer({
          initiator: location.hash === "#1",
          trickle: false,
          stream: stream
        })




        this.peer.on('signal', (data: any) => {
          console.log(JSON.stringify(data))
          var a = JSON.stringify(data)
          this.socket.emit('answered', a, this.from)

        })


        this.peer.on('close', function () {
          console.log('close');
        });

        this.peer.on('stream', (stream: any) => {
          this.videos.push({
            muted: false,
            srcObject: stream,
            userId: "123456",
          });
        })

      });




  }
  connect() {

    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    })
      .catch((err) => {
        console.error('[Error] Not able to retrieve user media:', err);
        return null;
      })
      .then((stream: any) => {


        this.peer = new SimplePeer({
          initiator: location.hash === "#1",
          trickle: false,
          stream: stream
        })

        this.peer.on('stream', (stream: any) => {
          this.videos.push({
            muted: false,
            srcObject: stream,
            userId: "123456",
          });

        })



        this.peer.on('close', function () {
          console.log('close');
        });




      });






    this.peer.signal(this.tpear)
    console.log(this.tpear)
    this.callvideo = "callvideo"
    this.calling = "calling2"
  }
  messagess() {
    this.peer.send("hello")
  }
  //set input values

  valuechange(val: any) {
    this.message = val.target.value
  }

  usernamevalue(val: any) {
    this.username = val.target.value
  }

  deskspacename(val: any) {
    this.deskname = val.target.value
  }

  namevalue(val: any) {
    this.name = val.target.value
  }

  passwordvalue(val: any) {
    this.password = val.target.value
  }

  valuechange2(val: any) {
    this.tpear = val.target.value
  }
searchtxt2:any=''

  searchvalchange(val: any) {
    this.searchtxt = val.target.value
  }
  
  searchvalchange2(val: any) {
    this.searchtxt2 = val.target.value
  }


}
