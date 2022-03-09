const SummaryBlock = ({ data, ...props }) => {

  console.log('SummaryBlock', data);

  return (
    <div className='flex flex-col'>
      <div className='text-2xl'> {data.title} </div>

      {
        (!data || !data.data || data.data.length == 0) ?
          (<div>No Summary Data</div>)
          :
          (<div className="flex flex-wrap">
            {
              data.data.map((summary) => {
                return (
                  <div key={summary.name} className="box-border p-2 w-1/2">
                    <div key={summary.name} className="flex flex-col p-2 box-border	 bg-red-100 rounded">
                      <div className="flex justify-between">
                        <div className="rounded-full p-2 border">{summary.icon}</div>
                        {/* OPTION */}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col text-sm">
                          <div>{summary.name}</div>
                          <div>{summary.count} Files</div>
                        </div>
                        <div className="text-sm justify-center">
                          {summary.size.fileSize()}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>)
      }

    </div>
  )
}

export default SummaryBlock;