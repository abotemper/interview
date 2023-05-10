import 'bootstrap/dist/css/bootstrap.css';

//Component 就是index， banana， pageprops就是打算传给他们的各种组件集
//如果我们想在项目中包含一些全局css，我们只能将全局css到入到这个应用程序文件中。
//也就是我们把 css应用在所有组件之中
export default ({ Component, pageProps }) => {
  return <Component {...pageProps}/>
};