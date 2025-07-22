/// <reference types="@figma/plugin-typings" />

// figma.showUI(__html__, { width: 300, height: 200 });

// interface HtmlNode {
//   text?: string;
// }

// interface HtmlNodesMessage {
//   type: "html-nodes";
//   nodes: HtmlNode[];
// }

// figma.ui.onmessage = async (msg: HtmlNodesMessage) => {
//   if (msg.type === "html-nodes") {
//     const nodes: HtmlNode[] = msg.nodes;

//     await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

//     nodes.forEach((el, i) => {
//       const text: TextNode = figma.createText();
//       text.characters = el.text || "Untitled";
//       text.fontSize = 16;
//       text.x = 100;
//       text.y = i * 60;
//       figma.currentPage.appendChild(text);
//     });

//     figma.closePlugin("✅ Created Text Nodes");
//   }
// };


figma.showUI(__html__, { width: 360, height: 160 });

figma.ui.onmessage = async (msg) => {
  console.log("Message received:", msg);

  if (msg.type === "create-nodes") {
    const data = msg.data;

    await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

    if (data && data.children) {
      data.children.forEach((el: any, i: number) => {
        const text = figma.createText();
        text.characters = el.text || "Untitled";
        text.fontSize = 16;
        text.x = 100;
        text.y = i * 60;
        figma.currentPage.appendChild(text);
      });
    }

    figma.notify("✅ Nodes created from backend data");
  }
};
