//此文件用于存放与切换主题有关代码

const body=document.querySelector('body');
/*
const followSystem=document.querySelector('#follow-system-theme');
const light=document.querySelector('#light-theme');
const dark=document.querySelector('#dark-theme');
alert(followSystem);
*/

const systemTheme=window.matchMedia('(prefers-color-scheme: light)');

const setTheme={
  light: ()=>{body.classList.remove('dark');},
  dark: ()=>{body.classList.add('dark');},
  syncSystem: ()=>{
    if(systemTheme.matches){
      setTheme.light();
    } else {
      setTheme.dark();
    }
  }
}

{
  let theme=localStorage.getItem('theme');
  if(theme===null){
    localStorage.setItem('theme','followSystem');
  } else if (theme==='followSystem'){
    setTheme.syncSystem();
  } else if (theme==='dark'){
    setTheme.dark();
  }
}
//根据本地存储的主题偏好数据同步主题

/*
followSystem.addEventListener('click',()=>{
  setTheme.syncSystem();
  localStorage.setItem('theme','followSystem');
});
light.addEventListener('click',()=>{
  setTheme.light();
  localStorage.setItem('theme','light');
});
dark.addEventListener('click',()=>{
  setTheme.dark();
  localStorage.setItem('theme','dark');
});
*/
systemTheme.addEventListener('change',()=>{
  if(localStorage.getItem('theme')==='followSystem'){
    setTheme.syncSystem();
}});
