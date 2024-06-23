
function RadioList() {
  return (
    <div className="py-10 px-10">
      <div className="text-sm font-bold">Notifications</div>
      <div className="mt-1.5 text-xs font-semibold text-neutral-300">How do you prefer to receive notifications?</div>
      <div className="mt-5 flex flex-col md:flex-row md:gap-x-4">
        <div className="">
          <input type="radio" name="notifications" id="" />
          <label className="ml-3" htmlFor="">Email</label>
        </div>
        <div>
          <input type="radio" name="notifications" id="" />
          <label className="ml-3" htmlFor="">Phone</label>
        </div>
        <div>
          <input type="radio" name="notifications" id="" />
          <label className="ml-3" htmlFor="">SMS</label>
        </div>
      </div>
    </div>
  )
}

export default RadioList
