## 원티드 3월 프론트엔드 프리온보딩 과정을 위한 사전과제

### 사전과제 1
<https://github.com/im2hw/wanted-pre-onbording-frontend-challenge-19>

---

### 사전과제 2
__1.DOM과 Virtual DOM을 설명해주세요.__

DOM이란 Document Object Model로 문서 객체 모델입니다. 트리 구조로 되어 있으며 바닐라 JS가 querySelector()등으로 각 element에 접근할 수 있습니다.
그러나 DOM을 매번 렌더링 하게 되면 속도 이슈가 발생하기 때문에 이를 해결할 Virtual DOM이 탄생했습니다. 

버츄얼 돔은 주로 SPA에서 적용되는 개념으로 하나의 큰 dom을 컴포넌트 단위로 쪼개서 추상화한 것 입니다. 앞서 말한 DOM의 잦은 렌더링으로 인한 속도 이슈를 해결하기 위해 버츄얼 돔을 사용하여 수정된 부분만 리얼 돔의 해당하는 부분에 업데이트를 하게 됩니다.

__2. 리액트의 특징을 설명해주세요.__

리액트는 실제 DOM이 아닌 가상 DOM을 사용하여 UI 업데이트를 처리합니다. 이를 통해 신속한 UI 업데이트가 가능하고 성능 최적화에 효율적입니다. 

또한 리액트는 컴포넌트 기반의 아키텍처를 채택 하고 있습니다. 구성하는 UI 요소를 컴포넌트로 분리하여 개발하고 이 컴포넌트들을 재사용하여 복잡한 UI를 구성할 수 있습니다. 

또한 자바스크립트와 XML을 조합한 JSX 문법을 사용합니다. 

마지막으로 리액트의 데이터 흐름은 단방향으로 유지됩니다.

  
__3. flux 패턴에 대하여 설명해주세요.__

Flux는 사용자 입력을 기반으로 Action을 만들고 Action을 Dispatcher에 전달하여 Store(Model)의 데이터를 변경한 뒤 View에 반영하는 단방향의 흐름으로 애플리케이션을 만드는 아키텍처입니다.

Flux 패턴의 각 요소를 간략히 설명하겠습니다. 먼저 Action은 데이터를 변경하는 행위로서 Dispatcher에게 전달되는 객체를 말합니다. 여기서 데이터는 Action의 타입(type)과 새로운 데이터(payload)를 말합니다.

다음 Dispatcher는 모든 데이터의 흐름을 관리하는 중앙 허브입니다. Store의 데이터를 조작하는 것은 오직 Dispatcher를 통해서만 가능합니다.

Store는 상태 저장소로서 상태와 상태를 변경할 수 있는 메서드를 가지고 있습니다. Dispatcher에서 콜백 함수를 실행하여 상태가 변경되면 View에게 데이터가 변경되었음을 알립니다.

View는 리액트 컴포넌트로 생각하면 됩니다. Store에서 View에게 상태가 변경되었음을 알려주면 최상위 View(Controller View)는 Store에서 데이터를 가져와 자식 View에게 내려보냅니다.

이러한 Flux 패턴이 탄생한 이유는 대규모 애플리케이션에서 데이터 흐름을 일관성 있게 관리함으로써 프로그램의 예측가능성(Predictability)을 높이기 위함입니다.
 
__4. 상태관리에 대하여 설명해주세요.__

상태관리란 여러 component간에 데이터 전달과 이벤트 통신을 한 곳에서 관리하는 방법입니다. 상태관리가 필요한 이유는 데이터가 바뀌어도 페이지가 렌더링 되지 않게 하기 위해서 이며, 
만약 상태(state)들이 복잡하게 얽혀있다면, 상호간에 의존성이 많아지게 되어서 UI가 어떻게 변하는지 알기 어렵기 때문에 효율적인 관리가 필요하기 떄문입니다. 
 
__5. 궁금한 것에 대하여 알려주세요.__
프론트엔드 개발자로서 백엔드 개발 언어 및 지식을 어느 정도의 수준까지 가지고 있어야하는지 궁금합니다!
