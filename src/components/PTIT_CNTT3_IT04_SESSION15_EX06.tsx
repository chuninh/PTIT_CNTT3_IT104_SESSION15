import { Component } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type DetailPostProps = {
  post: Post;
};

class DetailPost extends Component<DetailPostProps> {
  render() {
    const { post } = this.props;
    return (
      <div>
        <p><b>Id:</b> {post.id}</p>
        <p><b>Title:</b> {post.title}</p>
        <p><b>Content:</b> {post.content}</p>
        <p><b>Author:</b> {post.author}</p>
      </div>
    );
  }
}

type State = {
  posts: Post[];
};

export default class PTIT_CNTT3_IT04_SESSION15_EX06 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Tại sao nên học ReactJS",
          content: "Học ReactJS để đi làm",
          author: "David",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h2>Danh sách bài viết</h2>
        {this.state.posts.map((post) => (
          <DetailPost key={post.id} post={post} />
        ))}
      </div>
    );
  }
}
