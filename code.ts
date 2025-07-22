/// <reference types="@figma/plugin-typings" />
// // This plugin will open a window to prompt the user to enter a number, and
// // it will then create that many rectangles on the screen.

// // This file holds the main code for plugins. Code in this file has access to
// // the *figma document* via the figma global object.
// // You can access browser APIs in the <script> tag inside "ui.html" which has a
// // full browser environment (See https://www.figma.com/plugin-docs/how-plugins-run).

// // This shows the HTML page in "ui.html".
// figma.showUI(__html__);

// // Calls to "parent.postMessage" from within the HTML page will trigger this
// // callback. The callback will be passed the "pluginMessage" property of the
// // posted message.
// figma.ui.onmessage =  (msg: {type: string, count: number}) => {
//   // One way of distinguishing between different types of messages sent from
//   // your HTML page is to use an object with a "type" property like this.
//   if (msg.type === 'create-shapes') {
//     // This plugin creates rectangles on the screen.
//     const numberOfRectangles = msg.count;

//     const nodes: SceneNode[] = [];
//     for (let i = 0; i < numberOfRectangles; i++) {
//       const rect = figma.createRectangle();
//       rect.x = i * 150;
//       rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
//       figma.currentPage.appendChild(rect);
//       nodes.push(rect);
//     }
//     figma.currentPage.selection = nodes;
//     figma.viewport.scrollAndZoomIntoView(nodes);
//   }

//   // Make sure to close the plugin when you're done. Otherwise the plugin will
//   // keep running, which shows the cancel button at the bottom of the screen.
//   figma.closePlugin();
// };

// figma.showUI(__html__, { width: 360, height: 160 });

// figma.ui.onmessage = async (msg) => {
//   if (msg.type === "html-nodes") {
//     const nodes = msg.nodes;

//     await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

//     interface HtmlNode {
//       text?: string;
//     }

//     (nodes as HtmlNode[]).forEach((el: HtmlNode, i: number) => {
//       const text: TextNode = figma.createText();
//       text.characters = el.text || "Untitled";
//       text.fontSize = 16;
//       text.x = 100;
//       text.y = i * 60;
//       figma.currentPage.appendChild(text);
//     });

//     figma.closePlugin("✅ Created Text Nodes");
//   }
// };npm ls @figma/plugin-typings

figma.showUI(__html__, { width: 360, height: 160 });

interface HtmlNode {
  text?: string;
}

interface HtmlNodesMessage {
  type: "html-nodes";
  nodes: HtmlNode[];
}

figma.ui.onmessage = async (msg: HtmlNodesMessage) => {
  if (msg.type === "html-nodes") {
    const nodes: HtmlNode[] = msg.nodes;

    await figma.loadFontAsync({ family: "Roboto", style: "Regular" });

    nodes.forEach((el, i) => {
      const text: TextNode = figma.createText();
      text.characters = el.text || "Untitled";
      text.fontSize = 16;
      text.x = 100;
      text.y = i * 60;
      figma.currentPage.appendChild(text);
    });

    figma.closePlugin("✅ Created Text Nodes");
  }
};
