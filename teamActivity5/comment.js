class commentModel {
   constructor(type) {
      this.type = type;
      this.comment = getLocal(this.type) || [];
   }

   newComment(type, hikeName, content) {
      const newComment = {
         type: type,
         hikeName: hikeName,
         content: content,
         date: new Date()
      }
      this.comment.push(newComment)

      addToLocal(this.comment);
   }

   getComments(hikeName) {
      if (hikeName === null) {
         return commentList;
      }
      else {
         commentsForHike = [];
         commentList.array.forEach(comment => {
            if(comment.hikeName == hikeName) {
               commentsForHike.push(comment);
            }
         });
         return commentsForHike;
      }
   }
}

function getLocal() {

}

function addToLocal() {

}

const commentInsertion = `<div class="addComment">
<h2>Add a comment</h2>
<input type="text" id="commentEntry" />
<button id="commentSubmit">Comment</button>
</div>
<h2>Comments</h2>
<ul class="comments"></ul>`;

function renderCommentList() {

}

class comments {
   constructor(id) {
      this.id = id;
   }
   
}

export default comments;