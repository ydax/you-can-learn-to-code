var friendsName = 'Brian Taylor';
function sendReminder () {
  GmailApp.createDraft('daxcodes@gmail.com', 'Automatic Reminder', 'Remember to reach out to ' + friendsName + 'today.').send();
}