// ============================
// 🔹 Data Setup
// ============================
function createData(
   created,
   period,
   creator,
   column,
   assignee,
   labels,
   checklist,
   description
) {
   return {
      created,
      period,
      creator,
      column,
      assignee,
      labels,
      checklist,
      description,
   }
}

export const rows = [
   createData(
      '2025-10-18',
      'Weekly',
      'alex@mail.com',
      'To Do',
      ['/avatars/1.png', '/avatars/2.png', '/avatars/3.png'],
      ['#FF8042', '#82ca9d'],
      '3/5',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit...'
   ),
   createData(
      '2025-10-19',
      'Monthly',
      'john@mail.com',
      'Done',
      ['/avatars/1.png', '/avatars/2.png', '/avatars/3.png'],
      ['#FF8042', '#82ca9d'],
      '5/5',
      'Resolved'
   ),
   createData(
      '2025-10-20',
      'Daily',
      'kate@mail.com',
      'In Progress',
      ['/avatars/1.png', '/avatars/2.png', '/avatars/3.png', '/avatars/3.png'],
      ['#FF8042', '#82ca9d'],
      '2/4',
      'Lorem ipsum dolor sit'
   ),
]
