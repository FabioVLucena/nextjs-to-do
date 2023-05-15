
interface Props {
    quantidade?: number
}

const Count = ({ quantidade }: Props) => {
    return ( 
        <div className="flex flex-row justify-between">
            <p className="text-xl text-white-100 mr-2">Tarefas criadas</p>
            <div className="h-7 w-7 text-white-100 text-center border border-orange-200 bg-black-200 rounded-full">{quantidade}</div>
        </div>
     );
}
 
export default Count;