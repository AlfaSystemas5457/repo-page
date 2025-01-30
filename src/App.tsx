import { FolderRepo } from './components'
import { repos } from './repos'

export default function App() {

    return (
        <div className="m-0 p-0 bg-slate-200 dark:bg-slate-700 w-full h-screen flex align-middle justify-center flex-col text-black  dark:text-white">
            <div className='w-full h-fit flex justify-center p-10'>
                <h1 className="text-3xl font-bold mx-auto h-fit">
                    Repositorios
                </h1>
            </div>
            <div className="w-4/5 h-full mx-auto flex flex-wrap justify-center gap-4 p-10">
                {repos.repo?.map(item => (
                    <FolderRepo
                        key={item.name}
                        title={item.name}
                        link={item.link}
                        version={item.version}
                        className="flex-1 min-w-[400px]" />
                ))}
            </div>
        </div>
    )
}