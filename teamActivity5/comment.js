const commentList = JSON.parse(localStorage.getItem("comments"));

class commentModel {
   newComment(type, date, hikeName, content) {
      this.type = type;
      this.date = date;
      this.hikeName = hikeName;
      this.content = content;
      commentsList.push(this);
   }

   getCommentsByHike(hikeName) {
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

const commentInsertion = `<div class="addComment">
<h2>Add a comment</h2>
<input type="text" id="commentEntry" />
<button id="commentSubmit">Comment</button>
</div>
<h2>Comments</h2>
<ul class="comments"></ul>`;

class comments {

   renderCommentList() {

   }

   renderCommentInsert() {
      
   }
}

export default comment;