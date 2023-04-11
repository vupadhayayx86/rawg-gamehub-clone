interface Props{
    e_feild:String,
    e_value:String,
}


const ExtraContent = ({e_feild,e_value}:Props) => {
  return (
    <div className='d-flex justify-content-between pb-3 ' style={{fontSize:'11px'}}>
              <div>
                {e_feild} 
              </div>
              <div >{e_value}</div>
    </div>
  )
}

export default ExtraContent