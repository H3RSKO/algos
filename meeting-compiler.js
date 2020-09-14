// Given an array of meeting times, return an array of optomized and combined meetings.
// Time Complexity - 0(n^2)
// Space Complexity - 0(n)

let array = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]

let meetingApp = (array) => {
  let ans = []
  array.forEach(meeting => {
    if(ans.length === 0) return ans[0] = meeting
    ans.forEach(finalMeeting => {
      if(meeting.startTime === finalMeeting.endTime) finalMeeting.endTime = meeting.endTime
      if(meeting.startTime < finalMeeting.endTime && meeting.endTime > finalMeeting.endTime) finalMeeting.endTime = meeting.endTime
      if(meeting.endTime < finalMeeting.endTime && meeting.startTime < finalMeeting.startTime) finalMeeting.startTime = meeting.startTime
      else {return}
    })
    if (!ans.map(x => x.endTime).includes(meeting.endTime) && !ans.map(x => x.startTime).includes(meeting.startTime) && !ans.map(x => x.startTime < meeting.endTime && x.endTime > meeting.endTime)) ans[ans.length + 1] = meeting
  })
  return ans
}

console.log(meetingApp(array))
