

function CategoryItem({data}) {
  return (
      <div className='bg-red-500 text-center text-white py-10 rounded'>
          <h4 className='text-lg'>{data.title}</h4>
      </div>
  )
}

export default CategoryItem