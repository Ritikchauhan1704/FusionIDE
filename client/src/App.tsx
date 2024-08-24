import {Button} from '@/components/ui/button';

// export default function Home() {
//   return (
//     <div>
//       <Button>Click me</Button>
//     </div>
//   )
// }

export default function App() {
  return (
    <div className="flex flex-col justify-around items-center h-screen bg-black text-white">
      Welcome My friend Welcome
      <Button
      className='bg-slate-600'
        onClick={() => {
          alert('hello world');
        }}
      >
        Click me
      </Button>
    </div>
  );
}
