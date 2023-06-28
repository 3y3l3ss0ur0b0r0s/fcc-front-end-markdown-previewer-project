marked.setOptions({
  breaks: true,
  gfm: true,
  mangle: false,
  headerIds: false
});

const renderMarkdown = new marked.Renderer();

class Mkdn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderString:
        "# Heading \n## Heading 2 \n[Link](https://www.youtube.com/watch?v=iik25wqIuFo) \n`Inline code`\n```cpp\nfunction if(youLike)\n{\nreturn code(block);\n}\n```\n1. Ordered list item \n- Unordered list item \n> Blockquote \n![a flattering picture of the most handsome man](https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&dpr=1&w=1000) \n**Bolded text**"
    };
    console.log(this.state.renderString);
    this.handleChange = this.handleChange.bind(this);
    this.convert = this.convert.bind(this);
  }

  handleChange(e) {
    this.setState({
      renderString: e.target.value
    });
    console.log(e.target.value);
  }

  convert() {
    let output = marked.parse(this.state.renderString);
    console.log(output);
    return { __html: output };
  }

  render() {
    return (
      <div id="mkdn">
        <div id="e-window">
          <h2>
            <i class="fa fa-pencil"></i> Editor
          </h2>
          <textarea
            id="editor"
            class="font-monospace"
            value={this.state.input}
            defaultValue={this.state.renderString}
            onChange={this.handleChange}
          />
        </div>
        <div id="p-window">
          <h2>
            <i class="fa fa-eye"></i> Previewer
          </h2>
          <div
            id="preview"
            class="renderedText"
            dangerouslySetInnerHTML={this.convert()}
          />
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("main-doc"));
root.render(<Mkdn />);
