// time complexity  - 0(n log n)

const array = [
  { startTime: 1, endTime: 10 },
  { startTime: 7, endTime: 9 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
]


const meetingApp = (meetings) => {
  // deep copy the meeting to not alter the original meeting input
  const sortedMeetings = JSON.parse(JSON.stringify(meetings)).sort((a, b) => a.startTime - b.startTime) //n log n

  const mergedMeetings = [sortedMeetings[0]]

  for(let meeting of meetings) {
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]

    if (meeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, meeting.endTime);
    }
    else {
      mergedMeetings.push(meeting)
    }
  }
  return mergedMeetings
}

console.log(meetingApp(array))
