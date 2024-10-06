# use client

non-ineractive 파일은 사용자에게 주는 html이 비어있다.  
기본적으로 react.js는 javascript 엔진을 이용하여 클라이언트에서 파일을 렌더링 한다.next.js의 모든 것은 첫 번째로 server render를 거친다.

use client 비선언시 server component가 된다  
use client 선언시 client component가 된다  
server render 이후 non-interactive한 html 파일을 서버에 응답.브라우저의 react는 html을 interactive(javascript)하게 만든다. 이를 hydrate라고 부른다.  
hydrate는 client component만 가능하다. 즉, server component는 javascript를 사용할 수 없음

client에 한번 이상의 render될 일이 없다면 사용할 필요 없다
client component안에는 sever component를 가질 수 없다. 그 반대는 가능  
server component는 db와 통신할 수 있다. 통신되는 민감한 코드는 client로 가지 않기 때문

# layout

next.js는 layout component로 먼저 가서 export된 default component를 렌더링 한다.
자바의 include와 비슷하다. 헤더와 푸터 등 전역으로 고정시킬 컴포넌트들을 declare 한다.
레이아웃은 여러개 선언이 가능하며 path위치에 따라 parent 순서가 바뀐다.

<Layout>
  <YourPages />
</Layout>
