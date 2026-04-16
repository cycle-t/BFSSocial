const graphTemplates = [
  {
    name: "校园到周杰伦",
    note: "从校园活动与媒体合作网出发，观察 BFS 如何一层层扩散，最终找到周杰伦。",
    story: "把起点和终点换成任意两个人物，右侧都会同步解释为什么当前链路最短。",
    defaults: { start: "you", target: "jay" },
    nodes: [
      { id: "you", label: "你", title: "你", role: "计算机专业学生", x: 0.08, y: 0.62 },
      { id: "roommate", label: "室友", title: "室友小周", role: "街舞社成员", x: 0.22, y: 0.34 },
      { id: "classmate", label: "同学", title: "同学阿琳", role: "校园媒体志愿者", x: 0.23, y: 0.78 },
      { id: "senior", label: "学长", title: "学长阿凯", role: "校园乐队鼓手", x: 0.38, y: 0.2 },
      { id: "host", label: "主持", title: "主持人小麦", role: "广播站主播", x: 0.39, y: 0.54 },
      { id: "mentor", label: "导师", title: "导师林老师", role: "创新实验室指导老师", x: 0.39, y: 0.84 },
      { id: "photographer", label: "摄影", title: "摄影师阿泽", role: "音乐节现场摄影师", x: 0.55, y: 0.3 },
      { id: "dancer", label: "舞者", title: "舞者小羽", role: "巡演伴舞", x: 0.57, y: 0.7 },
      { id: "producer", label: "制作", title: "制作人陈墨", role: "音乐制作人", x: 0.72, y: 0.16 },
      { id: "journalist", label: "记者", title: "记者安妮", role: "音乐频道记者", x: 0.74, y: 0.48 },
      { id: "arranger", label: "编曲", title: "编曲阿杰", role: "编曲老师", x: 0.74, y: 0.82 },
      { id: "jteam", label: "杰威", title: "杰威工作人员", role: "唱片公司企划", x: 0.9, y: 0.32 },
      { id: "jay", label: "周董", title: "周杰伦", role: "目标人物", x: 0.9, y: 0.68 }
    ],
    edges: [
      ["you", "roommate"],
      ["you", "classmate"],
      ["roommate", "senior"],
      ["roommate", "host"],
      ["classmate", "host"],
      ["classmate", "mentor"],
      ["senior", "photographer"],
      ["host", "photographer"],
      ["host", "dancer"],
      ["mentor", "arranger"],
      ["photographer", "producer"],
      ["photographer", "journalist"],
      ["dancer", "journalist"],
      ["producer", "jteam"],
      ["journalist", "jteam"],
      ["journalist", "jay"],
      ["arranger", "jay"],
      ["jteam", "jay"]
    ]
  },
  {
    name: "开发者到马斯克",
    note: "从创业者、媒体和科技从业者组成的关系网里，寻找抵达马斯克的最短链路。",
    story: "这个场景很适合答辩时解释“无权图最短路”和“父节点回溯”。",
    defaults: { start: "dev", target: "musk" },
    nodes: [
      { id: "dev", label: "你", title: "开发者小陈", role: "开源项目维护者", x: 0.08, y: 0.6 },
      { id: "teammate", label: "队友", title: "创业队友 Nina", role: "产品原型设计师", x: 0.22, y: 0.3 },
      { id: "alumni", label: "校友", title: "校友 Leo", role: "黑客松导师", x: 0.22, y: 0.8 },
      { id: "mentor", label: "导师", title: "技术导师王老师", role: "创业营顾问", x: 0.38, y: 0.18 },
      { id: "founder", label: "创始", title: "创业者 Lina", role: "AI 创业公司创始人", x: 0.4, y: 0.48 },
      { id: "reporter", label: "记者", title: "科技记者 Mia", role: "科技媒体编辑", x: 0.41, y: 0.8 },
      { id: "investor", label: "投资", title: "投资人 Bob", role: "早期基金合伙人", x: 0.58, y: 0.28 },
      { id: "designer", label: "设计", title: "设计师 Eva", role: "X 平台设计师", x: 0.59, y: 0.66 },
      { id: "engineer", label: "工程", title: "工程师 Sam", role: "自动驾驶工程师", x: 0.62, y: 0.88 },
      { id: "director", label: "总监", title: "产品总监 Iris", role: "科技峰会嘉宾", x: 0.76, y: 0.22 },
      { id: "spacex", label: "Space", title: "SpaceX 项目经理", role: "航天项目经理", x: 0.78, y: 0.52 },
      { id: "tesla", label: "特斯", title: "Tesla 团队负责人", role: "特斯拉硬件负责人", x: 0.79, y: 0.82 },
      { id: "musk", label: "马斯", title: "Elon Musk", role: "目标人物", x: 0.93, y: 0.58 }
    ],
    edges: [
      ["dev", "teammate"],
      ["dev", "alumni"],
      ["teammate", "founder"],
      ["teammate", "reporter"],
      ["alumni", "mentor"],
      ["alumni", "investor"],
      ["mentor", "founder"],
      ["founder", "investor"],
      ["founder", "director"],
      ["reporter", "designer"],
      ["reporter", "engineer"],
      ["investor", "director"],
      ["designer", "spacex"],
      ["engineer", "tesla"],
      ["director", "spacex"],
      ["director", "tesla"],
      ["spacex", "musk"],
      ["tesla", "musk"]
    ]
  },
  {
    name: "志愿者到导演",
    note: "换一个没有明星光环的场景，依然能看到 BFS 按层寻找最短协作链。",
    story: "这能帮你在答辩里强调：BFS 是通用图搜索方法，不只适用于明星关系图。",
    defaults: { start: "you", target: "director" },
    nodes: [
      { id: "you", label: "你", title: "你", role: "志愿服务队成员", x: 0.08, y: 0.56 },
      { id: "planner", label: "策划", title: "活动策划小陶", role: "公益活动策划", x: 0.22, y: 0.28 },
      { id: "volunteer", label: "队长", title: "志愿队长阿海", role: "服务队队长", x: 0.23, y: 0.78 },
      { id: "photographer", label: "摄影", title: "摄影师青禾", role: "校园纪录片拍摄者", x: 0.38, y: 0.2 },
      { id: "teacher", label: "老师", title: "指导老师陈老师", role: "社会实践导师", x: 0.39, y: 0.48 },
      { id: "ngo", label: "机构", title: "公益机构联络人", role: "社区项目联络", x: 0.39, y: 0.82 },
      { id: "anchor", label: "主播", title: "主播雨桐", role: "城市观察栏目主播", x: 0.56, y: 0.18 },
      { id: "editor", label: "编辑", title: "编辑老顾", role: "城市人文编辑", x: 0.58, y: 0.46 },
      { id: "community", label: "社区", title: "社区主任马姐", role: "社区联络人", x: 0.57, y: 0.78 },
      { id: "screenwriter", label: "编剧", title: "编剧南希", role: "纪录片编剧", x: 0.75, y: 0.26 },
      { id: "producer", label: "制片", title: "制片人周宁", role: "独立制片人", x: 0.76, y: 0.6 },
      { id: "festival", label: "影展", title: "影展策展人", role: "纪录片影展策展人", x: 0.83, y: 0.84 },
      { id: "director", label: "导演", title: "导演韩青", role: "纪录片导演", x: 0.93, y: 0.52 }
    ],
    edges: [
      ["you", "planner"],
      ["you", "volunteer"],
      ["planner", "photographer"],
      ["planner", "teacher"],
      ["volunteer", "community"],
      ["volunteer", "ngo"],
      ["teacher", "editor"],
      ["photographer", "anchor"],
      ["photographer", "screenwriter"],
      ["ngo", "anchor"],
      ["ngo", "community"],
      ["anchor", "editor"],
      ["editor", "screenwriter"],
      ["screenwriter", "producer"],
      ["community", "producer"],
      ["producer", "festival"],
      ["festival", "director"]
    ]
  }
];

const colors = {
  bg: "#061120",
  grid: "rgba(113, 226, 255, 0.06)",
  fresh: "#1b2b46",
  seen: "#355888",
  queued: "#65dbff",
  current: "#ffd166",
  done: "#59f7c1",
  target: "#ff6fb8",
  start: "#71e2ff",
  path: "#89f0ff",
  edge: "rgba(139, 179, 255, 0.18)",
  seenEdge: "rgba(89, 247, 193, 0.2)",
  text: "#edf6ff",
  muted: "#9bb5d1",
  darkText: "#07111f",
  white: "#ffffff"
};

const canvas = document.querySelector("#graphCanvas");
const ctx = canvas.getContext("2d");
const graphTitle = document.querySelector("#graphTitle");
const graphNote = document.querySelector("#graphNote");
const startSelect = document.querySelector("#startSelect");
const targetSelect = document.querySelector("#targetSelect");
const missionText = document.querySelector("#missionText");
const missionHint = document.querySelector("#missionHint");
const phaseText = document.querySelector("#phaseText");
const phaseHint = document.querySelector("#phaseHint");
const degreeText = document.querySelector("#degreeText");
const resultText = document.querySelector("#resultText");
const canvasHint = document.querySelector("#canvasHint");
const statusText = document.querySelector("#statusText");
const seenMetric = document.querySelector("#seenMetric");
const doneMetric = document.querySelector("#doneMetric");
const edgeMetric = document.querySelector("#edgeMetric");
const queueList = document.querySelector("#queueList");
const orderList = document.querySelector("#orderList");
const layerList = document.querySelector("#layerList");
const parentList = document.querySelector("#parentList");
const nodeDetail = document.querySelector("#nodeDetail");
const setStartBtn = document.querySelector("#setStartBtn");
const setTargetBtn = document.querySelector("#setTargetBtn");
const pseudoLines = Array.from(document.querySelectorAll("#pseudoCode li"));
const quizQuestion = document.querySelector("#quizQuestion");
const quizChoices = document.querySelector("#quizChoices");
const quizFeedback = document.querySelector("#quizFeedback");
const playBtn = document.querySelector("#playBtn");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const resetBtn = document.querySelector("#resetBtn");
const graphBtn = document.querySelector("#graphBtn");
const restoreBtn = document.querySelector("#restoreBtn");
const speedRange = document.querySelector("#speedRange");
const screens = Array.from(document.querySelectorAll(".screen"));
const stageLinks = Array.from(document.querySelectorAll(".stage-link"));
const screenButtons = Array.from(document.querySelectorAll("[data-screen-target]"));
const loadingPercent = document.querySelector("#loadingPercent");
const loadingStatus = document.querySelector("#loadingStatus");
const loadingBar = document.querySelector("#loadingBar");
const exerciseCards = Array.from(document.querySelectorAll(".exercise-card"));
const gradeQuizBtn = document.querySelector("#gradeQuizBtn");
const resetExerciseBtn = document.querySelector("#resetExerciseBtn");
const exerciseResult = document.querySelector("#exerciseResult");

const screenOrder = ["loading", "principle", "demo", "exercise", "feedback"];
const loadingStages = [
  { upTo: 15, text: "正在初始化课程结构..." },
  { upTo: 35, text: "正在载入 BFS 原理讲解模块..." },
  { upTo: 60, text: "正在联调场景演示与动画画布..." },
  { upTo: 82, text: "正在同步课后习题与评分逻辑..." },
  { upTo: 100, text: "课程准备完成，可以进入学习。" }
];

let graphIndex = 0;
let graph = cloneGraph(graphTemplates[graphIndex]);
let nodeLookup = buildNodeLookup(graph);
let startNode = graph.defaults.start;
let targetNode = graph.defaults.target;
let steps = [];
let stepIndex = 0;
let playing = false;
let hoverNode = null;
let selectedNodeId = startNode;
let linkDraftId = null;
let cssWidth = 0;
let cssHeight = 0;
let nodeRadius = 28;
let stepStartedAt = performance.now();
let lastAdvanceAt = performance.now();
let quizStep = -1;
let quizMessage = "";
let quizGood = false;
let activeScreen = "loading";
let loadingProgress = 0;

function cloneGraph(template) {
  return {
    name: template.name,
    note: template.note,
    story: template.story,
    defaults: { ...template.defaults },
    nodes: template.nodes.map((node) => ({ ...node })),
    edges: template.edges.map((edge) => [...edge]),
    customCount: 0,
    modified: false
  };
}

function buildNodeLookup(graphData) {
  return new Map(graphData.nodes.map((node) => [node.id, node]));
}

function currentStep() {
  return steps[stepIndex];
}

function getNode(id) {
  return nodeLookup.get(id) || null;
}

function nodeName(id) {
  const node = getNode(id);
  return node ? node.title || node.label : id;
}

function edgeKey(a, b) {
  return [a, b].sort().join("|");
}

function buildAdjacency(graphData) {
  const adjacency = new Map(graphData.nodes.map((node) => [node.id, []]));
  graphData.edges.forEach(([from, to]) => {
    if (!adjacency.has(from) || !adjacency.has(to)) {
      return;
    }
    adjacency.get(from).push(to);
    adjacency.get(to).push(from);
  });
  adjacency.forEach((neighbors) => {
    neighbors.sort((left, right) => nodeName(left).localeCompare(nodeName(right), "zh-CN"));
  });
  return adjacency;
}

function reconstructPath(parent, target) {
  if (!(target in parent)) {
    return [];
  }

  const path = [];
  let current = target;
  while (current !== null && current !== undefined) {
    path.push(current);
    current = parent[current];
  }
  return path.reverse();
}

function snapshot(payload) {
  return {
    queue: [...payload.queue],
    seen: [...payload.seen],
    done: [...payload.done],
    order: [...payload.order],
    distance: { ...payload.distance },
    parent: { ...payload.parent },
    current: payload.current,
    activeEdge: payload.activeEdge ? [...payload.activeEdge] : null,
    line: payload.line,
    message: payload.message,
    kind: payload.kind,
    checkedEdges: payload.checkedEdges,
    candidatePath: [...payload.candidatePath],
    finalPath: [...payload.finalPath]
  };
}

function captureState(payload) {
  const candidatePath = targetNode in payload.parent ? reconstructPath(payload.parent, targetNode) : [];
  return snapshot({ ...payload, candidatePath });
}

function setLoadingState(progress) {
  loadingProgress = Math.max(0, Math.min(progress, 100));
  loadingPercent.textContent = `${loadingProgress}%`;
  loadingBar.style.width = `${loadingProgress}%`;

  const stage = loadingStages.find((item) => loadingProgress <= item.upTo) || loadingStages[loadingStages.length - 1];
  loadingStatus.textContent = stage.text;
}

function startLoadingSequence() {
  setLoadingState(0);

  const timer = window.setInterval(() => {
    const increment = loadingProgress < 35 ? 7 : loadingProgress < 82 ? 9 : 6;
    const nextProgress = Math.min(100, loadingProgress + increment);
    setLoadingState(nextProgress);

    if (nextProgress >= 100) {
      window.clearInterval(timer);
    }
  }, 180);
}

function showScreen(name) {
  if (!screenOrder.includes(name)) {
    return;
  }

  if (name !== "demo" && playing) {
    pausePlayback();
  }

  activeScreen = name;
  document.body.dataset.screen = name;

  screens.forEach((screen) => {
    screen.classList.toggle("screen-active", screen.dataset.screen === name);
  });

  stageLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.screenTarget === name);
  });

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  if (name === "demo") {
    requestAnimationFrame(() => {
      resizeCanvas();
      updateUI();
    });
  }
}

function createSteps(graphData, start, target) {
  const adjacency = buildAdjacency(graphData);
  const queue = [start];
  const seen = new Set([start]);
  const done = new Set();
  const distance = { [start]: 0 };
  const parent = { [start]: null };
  const order = [];
  let checkedEdges = 0;
  let finalPath = [];
  const built = [];

  built.push(captureState({
    queue,
    seen,
    done,
    order,
    distance,
    parent,
    current: null,
    activeEdge: null,
    line: 1,
    message: `先把 ${nodeName(start)} 放进队列，BFS 的第 0 层从这里开始。`,
    kind: "init",
    checkedEdges,
    finalPath
  }));

  built.push(captureState({
    queue,
    seen,
    done,
    order,
    distance,
    parent,
    current: null,
    activeEdge: null,
    line: 2,
    message: `${nodeName(start)} 被标记为已发现，同时记录它的父节点为空。`,
    kind: "setup",
    checkedEdges,
    finalPath
  }));

  while (queue.length > 0) {
    built.push(captureState({
      queue,
      seen,
      done,
      order,
      distance,
      parent,
      current: null,
      activeEdge: null,
      line: 3,
      message: `队列非空，准备处理距离更近的这一层。当前队头是 ${nodeName(queue[0])}。`,
      kind: "loop",
      checkedEdges,
      finalPath
    }));

    const current = queue.shift();
    order.push(current);

    built.push(captureState({
      queue,
      seen,
      done,
      order,
      distance,
      parent,
      current,
      activeEdge: null,
      line: 4,
      message: `${nodeName(current)} 出队，成为当前访问节点。`,
      kind: "dequeue",
      checkedEdges,
      finalPath
    }));

    if (current === target) {
      built.push(captureState({
        queue,
        seen,
        done,
        order,
        distance,
        parent,
        current,
        activeEdge: null,
        line: 5,
        message: `${nodeName(target)} 已经出队。因为 BFS 按层搜索，所以这时命中的就是最短关系链。`,
        kind: "found",
        checkedEdges,
        finalPath
      }));

      finalPath = reconstructPath(parent, target);
      done.add(current);

      built.push(captureState({
        queue,
        seen,
        done,
        order,
        distance,
        parent,
        current: null,
        activeEdge: null,
        line: 8,
        message: `沿着父节点回溯，得到最短链路：${finalPath.map(nodeName).join(" -> ")}。`,
        kind: "reconstruct",
        checkedEdges,
        finalPath
      }));
      return built;
    }

    const neighbors = adjacency.get(current) || [];
    for (let index = 0; index < neighbors.length; index += 1) {
      const neighbor = neighbors[index];
      checkedEdges += 1;

      built.push(captureState({
        queue,
        seen,
        done,
        order,
        distance,
        parent,
        current,
        activeEdge: [current, neighbor],
        line: 6,
        message: `检查 ${nodeName(current)} 的邻居 ${nodeName(neighbor)}。`,
        kind: "inspect",
        checkedEdges,
        finalPath
      }));

      if (!seen.has(neighbor)) {
        seen.add(neighbor);
        parent[neighbor] = current;
        distance[neighbor] = distance[current] + 1;
        queue.push(neighbor);

        const foundTarget = neighbor === target;
        built.push(captureState({
          queue,
          seen,
          done,
          order,
          distance,
          parent,
          current,
          activeEdge: [current, neighbor],
          line: 7,
          message: foundTarget
            ? `${nodeName(target)} 第一次被发现，它的最短层数已经锁定，等出队后即可回溯完整路径。`
            : `${nodeName(neighbor)} 首次入队，层级确定为第 ${distance[neighbor]} 层。`,
          kind: foundTarget ? "target-seen" : "enqueue",
          checkedEdges,
          finalPath
        }));
      } else {
        built.push(captureState({
          queue,
          seen,
          done,
          order,
          distance,
          parent,
          current,
          activeEdge: [current, neighbor],
          line: 7,
          message: `${nodeName(neighbor)} 之前已经出现过，跳过它以避免重复搜索。`,
          kind: "skip",
          checkedEdges,
          finalPath
        }));
      }
    }

    done.add(current);
    built.push(captureState({
      queue,
      seen,
      done,
      order,
      distance,
      parent,
      current: null,
      activeEdge: null,
      line: 3,
      message: `${nodeName(current)} 的邻居已经处理完，继续轮到下一位队头。`,
      kind: "done",
      checkedEdges,
      finalPath
    }));
  }

  built.push(captureState({
    queue,
    seen,
    done,
    order,
    distance,
    parent,
    current: null,
    activeEdge: null,
    line: 8,
    message: `队列清空了，但仍然没有找到 ${nodeName(target)}。说明当前图中两人并不连通。`,
    kind: "unreachable",
    checkedEdges,
    finalPath
  }));

  return built;
}

function setStep(index) {
  stepIndex = Math.max(0, Math.min(index, steps.length - 1));
  stepStartedAt = performance.now();
  lastAdvanceAt = performance.now();
  quizStep = -1;
  quizMessage = "";
  updateUI();
}

function pausePlayback() {
  playing = false;
  syncControls();
}

function nextStep() {
  if (stepIndex >= steps.length - 1) {
    pausePlayback();
    return;
  }
  setStep(stepIndex + 1);
}

function prevStep() {
  pausePlayback();
  setStep(stepIndex - 1);
}

function resetTraversal() {
  pausePlayback();
  setStep(0);
}

function ensureValidSelections() {
  if (!getNode(startNode)) {
    startNode = graph.nodes[0].id;
  }
  if (!getNode(targetNode)) {
    targetNode = graph.nodes[Math.max(1, graph.nodes.length - 1)].id;
  }
}

function populateSelects() {
  startSelect.replaceChildren();
  targetSelect.replaceChildren();

  graph.nodes.forEach((node) => {
    const startOption = document.createElement("option");
    startOption.value = node.id;
    startOption.textContent = nodeName(node.id);
    startSelect.appendChild(startOption);

    const targetOption = document.createElement("option");
    targetOption.value = node.id;
    targetOption.textContent = nodeName(node.id);
    targetSelect.appendChild(targetOption);
  });

  startSelect.value = startNode;
  targetSelect.value = targetNode;
}

function rebuildGraphCopy() {
  nodeLookup = buildNodeLookup(graph);
  ensureValidSelections();
  populateSelects();
  steps = createSteps(graph, startNode, targetNode);
  selectedNodeId = getNode(selectedNodeId) ? selectedNodeId : startNode;
  setStep(0);
}

function loadTemplate(index) {
  graphIndex = index;
  graph = cloneGraph(graphTemplates[graphIndex]);
  startNode = graph.defaults.start;
  targetNode = graph.defaults.target;
  selectedNodeId = startNode;
  linkDraftId = null;
  pausePlayback();
  rebuildGraphCopy();
}

function setEmptyState(container, text, tagName = "span") {
  container.replaceChildren();
  const empty = document.createElement(tagName);
  empty.className = "empty-state";
  empty.textContent = text;
  container.appendChild(empty);
}

function updateGraphCopy() {
  graphTitle.textContent = graph.name;
  const customCount = graph.nodes.filter((node) => node.custom).length;
  graphNote.textContent = customCount > 0
    ? `${graph.note} 当前已加入 ${customCount} 个自定义人物。`
    : graph.note;
  missionText.textContent = `${nodeName(startNode)} -> ${nodeName(targetNode)}`;
  missionHint.textContent = graph.story;
}

function phaseLabel(step) {
  if (step.kind === "init") {
    return "起点入队";
  }
  if (step.kind === "setup") {
    return "初始化记录";
  }
  if (step.kind === "loop") {
    const nextDepth = step.queue.length > 0 ? step.distance[step.queue[0]] : 0;
    return `准备扩展第 ${nextDepth} 层`;
  }
  if (step.kind === "dequeue") {
    return `取出 ${nodeName(step.current)}`;
  }
  if (step.kind === "inspect") {
    return "检查邻居";
  }
  if (step.kind === "enqueue") {
    return "新节点入队";
  }
  if (step.kind === "target-seen") {
    return "目标已被发现";
  }
  if (step.kind === "skip") {
    return "跳过重复节点";
  }
  if (step.kind === "found") {
    return "目标出队";
  }
  if (step.kind === "reconstruct") {
    return "回溯最短路径";
  }
  if (step.kind === "done") {
    return "当前节点处理完毕";
  }
  if (step.kind === "unreachable") {
    return "未找到连通路径";
  }
  return "搜索中";
}

function phaseDescription(step) {
  if (step.kind === "init" || step.kind === "setup") {
    return "第 0 层先被锁定，队列准备开始层序扩散。";
  }
  if (step.kind === "dequeue") {
    return "谁先出队，谁就先代表当前这一层被处理。";
  }
  if (step.kind === "inspect") {
    return "BFS 会逐个检查邻居，但只让第一次出现的节点入队。";
  }
  if (step.kind === "enqueue") {
    return "节点首次入队时，它的最短层级和父节点就已经确定。";
  }
  if (step.kind === "target-seen") {
    return "因为 BFS 按层推进，所以目标第一次出现时，最短距离已经锁定。";
  }
  if (step.kind === "skip") {
    return "跳过重复节点，能防止搜索在环上来回打转。";
  }
  if (step.kind === "found") {
    return "目标出队后就可以停止搜索，再沿父节点回溯即可。";
  }
  if (step.kind === "reconstruct") {
    return "从目标一路回到起点，拼接出的就是最短关系链。";
  }
  if (step.kind === "unreachable") {
    return "可以试着补一条新边，再观察最短路径如何变化。";
  }
  return "队列永远优先处理离起点更近的一层。";
}

function renderResult(step) {
  const finalPath = step.finalPath || [];
  const candidatePath = step.candidatePath || [];

  if (finalPath.length > 0) {
    degreeText.textContent = `${finalPath.length - 1} 度关系`;
    resultText.textContent = finalPath.map(nodeName).join(" -> ");
    return;
  }

  if (candidatePath.length > 0 && startNode !== targetNode) {
    degreeText.textContent = `已发现 ${candidatePath.length - 1} 度线索`;
    resultText.textContent = `${candidatePath.map(nodeName).join(" -> ")}（目标已入队，等待出队确认）`;
    return;
  }

  if (step.kind === "unreachable") {
    degreeText.textContent = "当前未连通";
    resultText.textContent = "当前图里两人之间没有路径，可以通过加点或补边重新尝试。";
    return;
  }

  if (startNode === targetNode) {
    degreeText.textContent = "0 度关系";
    resultText.textContent = "起点与目标相同，搜索会在命中自身后立即结束。";
    return;
  }

  degreeText.textContent = "搜索中";
  resultText.textContent = "目标还没出现，BFS 会先处理离起点更近的那一层。";
}

function renderQueue(step) {
  queueList.replaceChildren();
  if (step.queue.length === 0) {
    setEmptyState(queueList, "队列为空", "li");
    return;
  }

  step.queue.forEach((id, index) => {
    const item = document.createElement("li");
    item.textContent = nodeName(id);
    if (step.queue.length === 1) {
      item.dataset.tag = "队头 / 队尾";
    } else if (index === 0) {
      item.dataset.tag = "队头";
    } else if (index === step.queue.length - 1) {
      item.dataset.tag = "队尾";
    } else {
      item.dataset.tag = "排队中";
    }
    queueList.appendChild(item);
  });
}

function renderOrder(step) {
  orderList.replaceChildren();
  if (step.order.length === 0) {
    setEmptyState(orderList, "还没有节点出队");
    return;
  }

  step.order.forEach((id) => {
    const item = document.createElement("span");
    item.textContent = nodeName(id);
    orderList.appendChild(item);
  });
}

function renderLayers(step) {
  layerList.replaceChildren();
  const entries = Object.entries(step.distance);
  if (entries.length === 0) {
    setEmptyState(layerList, "层级信息尚未生成");
    return;
  }

  const groups = new Map();
  entries.forEach(([id, depth]) => {
    if (!groups.has(depth)) {
      groups.set(depth, []);
    }
    groups.get(depth).push(id);
  });

  Array.from(groups.keys()).sort((a, b) => Number(a) - Number(b)).forEach((depth) => {
    const card = document.createElement("div");
    card.className = "layer-item";

    const title = document.createElement("div");
    title.className = "layer-title";
    title.textContent = `第 ${depth} 层`;
    card.appendChild(title);

    const row = document.createElement("div");
    row.className = "layer-nodes";
    groups.get(depth).forEach((id) => {
      const chip = document.createElement("span");
      chip.textContent = nodeName(id);
      row.appendChild(chip);
    });
    card.appendChild(row);
    layerList.appendChild(card);
  });
}

function renderParents(step) {
  parentList.replaceChildren();
  const children = Object.keys(step.parent).filter((id) => step.parent[id] !== null);
  if (children.length === 0) {
    setEmptyState(parentList, "起点还没有扩散出父节点映射");
    return;
  }

  children
    .sort((left, right) => {
      const depthDiff = (step.distance[left] || 0) - (step.distance[right] || 0);
      if (depthDiff !== 0) {
        return depthDiff;
      }
      return nodeName(left).localeCompare(nodeName(right), "zh-CN");
    })
    .forEach((child) => {
      const chip = document.createElement("span");
      chip.textContent = `${nodeName(child)} <- ${nodeName(step.parent[child])}`;
      parentList.appendChild(chip);
    });
}

function statusLabel(status) {
  if (status === "current") {
    return "当前访问";
  }
  if (status === "done") {
    return "已处理";
  }
  if (status === "queued") {
    return "排队中";
  }
  if (status === "seen") {
    return "已发现";
  }
  return "未发现";
}

function getNodeStatus(id, step) {
  if (step.current === id) {
    return "current";
  }
  if (step.done.includes(id)) {
    return "done";
  }
  if (step.queue.includes(id)) {
    return "queued";
  }
  if (step.seen.includes(id)) {
    return "seen";
  }
  return "fresh";
}

function renderNodeDetail(step) {
  nodeDetail.replaceChildren();
  const focusId = selectedNodeId || step.current || startNode;
  const node = getNode(focusId);

  if (!node) {
    setEmptyState(nodeDetail, "请先选中一个节点");
    setStartBtn.disabled = true;
    setTargetBtn.disabled = true;
    return;
  }

  const card = document.createElement("div");
  card.className = "node-detail-card";

  const titleRow = document.createElement("div");
  titleRow.className = "node-title-row";

  const title = document.createElement("strong");
  title.textContent = nodeName(node.id);
  titleRow.appendChild(title);

  const pill = document.createElement("span");
  pill.className = "status-pill";
  pill.textContent = statusLabel(getNodeStatus(node.id, step));
  titleRow.appendChild(pill);
  card.appendChild(titleRow);

  const role = document.createElement("p");
  role.textContent = node.role;
  card.appendChild(role);

  const meta = document.createElement("div");
  meta.className = "detail-meta";

  const distance = document.createElement("span");
  distance.textContent = node.id in step.distance ? `距起点 ${step.distance[node.id]} 层` : "尚未进入搜索范围";
  meta.appendChild(distance);

  const parent = document.createElement("span");
  parent.textContent = step.parent[node.id] ? `父节点 ${nodeName(step.parent[node.id])}` : "父节点为空";
  meta.appendChild(parent);

  const tag = document.createElement("span");
  tag.textContent = node.id === startNode ? "人物 A" : node.id === targetNode ? "人物 B" : "中间人物";
  meta.appendChild(tag);

  card.appendChild(meta);

  const tip = document.createElement("p");
  if (node.id === startNode && node.id === targetNode) {
    tip.textContent = "这个节点同时是起点和目标。";
  } else if (node.id === startNode) {
    tip.textContent = "它是当前搜索的起点，代表第 0 层。";
  } else if (node.id === targetNode) {
    tip.textContent = "它是当前搜索的目标，第一次被发现时最短距离就会锁定。";
  } else {
    tip.textContent = "你可以把它设成新起点或新目标，立即对比 BFS 的搜索变化。";
  }
  card.appendChild(tip);
  nodeDetail.appendChild(card);

  setStartBtn.disabled = node.id === startNode;
  setTargetBtn.disabled = node.id === targetNode;
}

function renderPseudo(activeLine) {
  pseudoLines.forEach((line) => {
    line.classList.toggle("active", Number(line.dataset.line) === activeLine);
  });
}

function shuffle(items) {
  const copied = [...items];
  for (let index = copied.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const temp = copied[index];
    copied[index] = copied[swapIndex];
    copied[swapIndex] = temp;
  }
  return copied;
}

function makeChoicePool(answerId) {
  const ids = graph.nodes.map((node) => node.id).filter((id) => id !== answerId);
  return shuffle([answerId, ...shuffle(ids).slice(0, Math.min(2, ids.length))]);
}

function renderQuiz(step) {
  quizChoices.replaceChildren();
  const searchEnded = step.kind === "found" || step.kind === "reconstruct" || step.kind === "unreachable";
  const queueAnswer = !searchEnded && step.queue.length > 0 ? step.queue[0] : "finish";
  const choices = !searchEnded && step.queue.length > 0
    ? makeChoicePool(queueAnswer).map((id) => ({ key: id, label: nodeName(id) }))
    : [
        { key: "finish", label: "结束搜索" },
        { key: "random", label: "随机找一个" },
        { key: "restart", label: "回到起点" }
      ];

  quizQuestion.textContent = !searchEnded && step.queue.length > 0
    ? "下一次会从队列里取出谁？"
    : step.kind === "found" || step.kind === "reconstruct"
      ? "已经找到目标后，BFS 会怎样？"
      : "队列为空时，BFS 会怎样？";

  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice.label;
    button.addEventListener("click", () => checkQuiz(choice.key, queueAnswer));
    quizChoices.appendChild(button);
  });

  quizFeedback.textContent = quizStep === stepIndex ? quizMessage : "";
  quizFeedback.classList.toggle("good", quizStep === stepIndex && quizGood);
  quizFeedback.classList.toggle("bad", quizStep === stepIndex && !quizGood && quizMessage);
}

function checkQuiz(choiceKey, answerKey) {
  quizStep = stepIndex;
  quizGood = choiceKey === answerKey;
  quizMessage = quizGood
    ? "答对了，BFS 永远先处理队头。"
    : answerKey === "finish"
      ? "队列清空后，BFS 直接结束。"
      : `再看队头，下一位应该是 ${nodeName(answerKey)}。`;
  renderQuiz(currentStep());
}

function renderCanvasHint() {
  if (linkDraftId) {
    canvasHint.textContent = `已选中 ${nodeName(linkDraftId)}，继续 Shift+单击另一个节点即可创建关系。`;
    return;
  }
  if (selectedNodeId) {
    canvasHint.textContent = `当前选中 ${nodeName(selectedNodeId)}。你可以在右侧把它设为人物 A 或人物 B。`;
    return;
  }
  canvasHint.textContent = "单击节点查看详情；Shift+单击两个节点创建关系；双击空白区域添加新人物。";
}

function gradeExercises() {
  let answered = 0;
  let correct = 0;

  exerciseCards.forEach((card) => {
    card.classList.remove("correct", "incorrect", "unanswered");
    const selected = card.querySelector('input[type="radio"]:checked');
    const feedback = card.querySelector(".exercise-feedback");
    const explanation = card.dataset.explanation;
    const answerText = card.dataset.answerText;

    if (!selected) {
      card.classList.add("unanswered");
      feedback.textContent = "这题还没有作答，可以先根据队列、层级和去重逻辑再判断一次。";
      return;
    }

    answered += 1;
    if (selected.value === card.dataset.answer) {
      correct += 1;
      card.classList.add("correct");
      feedback.textContent = `回答正确。${explanation}`;
      return;
    }

    card.classList.add("incorrect");
    feedback.textContent = `回答不正确，正确答案是：${answerText}。${explanation}`;
  });

  const total = exerciseCards.length;
  const unanswered = total - answered;

  if (unanswered > 0) {
    exerciseResult.textContent = `当前已答 ${answered}/${total} 题，答对 ${correct} 题。还有 ${unanswered} 题未完成，补齐后会更适合做课堂测评。`;
    return;
  }

  exerciseResult.textContent = correct === total
    ? `本次得分 ${correct}/${total}。四题全部答对，已经可以比较扎实地解释 BFS 的最短路原理。`
    : `本次得分 ${correct}/${total}。建议回到场景演示界面，再观察队列变化、层级扩散和父节点回溯。`;
}

function resetExercises() {
  exerciseCards.forEach((card) => {
    card.classList.remove("correct", "incorrect", "unanswered");
    const feedback = card.querySelector(".exercise-feedback");
    const checked = card.querySelector('input[type="radio"]:checked');

    if (checked) {
      checked.checked = false;
    }

    feedback.textContent = "";
  });

  exerciseResult.textContent = "完成后点击“提交答案”，系统会给出即时评分和解析。";
}

function syncControls() {
  prevBtn.disabled = stepIndex === 0;
  nextBtn.disabled = stepIndex >= steps.length - 1;
  restoreBtn.disabled = !graph.modified;
  playBtn.textContent = playing
    ? "暂停"
    : stepIndex >= steps.length - 1
      ? "重新演示"
      : "自动播放";
}

function updateUI() {
  const step = currentStep();
  updateGraphCopy();
  startSelect.value = startNode;
  targetSelect.value = targetNode;
  phaseText.textContent = phaseLabel(step);
  phaseHint.textContent = phaseDescription(step);
  statusText.textContent = `${step.message}（${stepIndex + 1}/${steps.length}）`;
  seenMetric.textContent = String(step.seen.length);
  doneMetric.textContent = String(step.done.length);
  edgeMetric.textContent = String(step.checkedEdges);

  renderResult(step);
  renderQueue(step);
  renderOrder(step);
  renderLayers(step);
  renderParents(step);
  renderNodeDetail(step);
  renderPseudo(step.line);
  renderQuiz(step);
  renderCanvasHint();
  syncControls();
}

function padX() {
  return cssWidth < 620 ? 48 : 72;
}

function padY() {
  return cssHeight < 420 ? 48 : 62;
}

function getNodePosition(node) {
  return {
    x: padX() + node.x * Math.max(1, cssWidth - padX() * 2),
    y: padY() + node.y * Math.max(1, cssHeight - padY() * 2)
  };
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function toNormalizedPosition(point) {
  return {
    x: clamp((point.x - padX()) / Math.max(1, cssWidth - padX() * 2), 0.05, 0.95),
    y: clamp((point.y - padY()) / Math.max(1, cssHeight - padY() * 2), 0.05, 0.95)
  };
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return;
  }
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  cssWidth = rect.width;
  cssHeight = rect.height;
  canvas.width = Math.floor(rect.width * dpr);
  canvas.height = Math.floor(rect.height * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  nodeRadius = cssWidth < 620 ? 24 : 28;
}

function pathEdges(path) {
  const edgeSet = new Set();
  for (let index = 0; index < path.length - 1; index += 1) {
    edgeSet.add(edgeKey(path[index], path[index + 1]));
  }
  return edgeSet;
}

function drawBackdrop(now) {
  ctx.fillStyle = colors.bg;
  ctx.fillRect(0, 0, cssWidth, cssHeight);

  ctx.save();
  ctx.strokeStyle = colors.grid;
  ctx.lineWidth = 1;
  for (let x = 24; x < cssWidth; x += 52) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, cssHeight);
    ctx.stroke();
  }
  for (let y = 24; y < cssHeight; y += 52) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(cssWidth, y);
    ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  for (let index = 0; index < 28; index += 1) {
    const x = ((index * 97) % 100) / 100 * cssWidth;
    const y = ((index * 53) % 100) / 100 * cssHeight;
    const alpha = 0.18 + Math.sin(now / 1200 + index) * 0.08;
    ctx.fillStyle = `rgba(255,255,255,${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, 1.1, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function isActiveEdge(edge, a, b) {
  if (!edge) {
    return false;
  }
  return (edge[0] === a && edge[1] === b) || (edge[0] === b && edge[1] === a);
}

function drawEdgePulse(from, to, now, color) {
  const progress = ((now - stepStartedAt) % 900) / 900;
  const x = from.x + (to.x - from.x) * progress;
  const y = from.y + (to.y - from.y) * progress;

  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawEdges(step, now) {
  const highlightPath = step.finalPath.length > 0 ? step.finalPath : step.candidatePath;
  const pathEdgeSet = pathEdges(highlightPath);

  graph.edges.forEach(([fromId, toId]) => {
    const from = getNodePosition(getNode(fromId));
    const to = getNodePosition(getNode(toId));
    const active = isActiveEdge(step.activeEdge, fromId, toId);
    const onPath = pathEdgeSet.has(edgeKey(fromId, toId));
    const seenEdge = step.seen.includes(fromId) && step.seen.includes(toId);

    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = onPath ? 5 : active ? 4 : 2.3;
    ctx.strokeStyle = onPath
      ? "rgba(137, 240, 255, 0.9)"
      : active
        ? "rgba(255, 209, 102, 0.9)"
        : seenEdge
          ? colors.seenEdge
          : colors.edge;
    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();
    ctx.restore();

    if (active) {
      drawEdgePulse(from, to, now, colors.current);
    } else if (onPath && highlightPath.length > 1) {
      drawEdgePulse(from, to, now + 220, colors.path);
    }
  });

  if (linkDraftId) {
    const source = getNodePosition(getNode(linkDraftId));
    ctx.save();
    ctx.strokeStyle = "rgba(255, 111, 184, 0.5)";
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.arc(source.x, source.y, nodeRadius + 16, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

function drawRipple(position, now, prefix) {
  for (let ring = 0; ring < 2; ring += 1) {
    const progress = ((now - stepStartedAt) / 900 + ring * 0.5) % 1;
    const radius = nodeRadius + 8 + progress * 28;
    const alpha = 0.18 * (1 - progress);
    ctx.save();
    ctx.strokeStyle = `${prefix}${alpha})`;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
}

function nodeFill(status, nodeId) {
  if (status === "current") {
    return colors.current;
  }
  if (status === "done") {
    return colors.done;
  }
  if (status === "queued") {
    return colors.queued;
  }
  if (status === "seen") {
    return colors.seen;
  }
  if (nodeId === targetNode) {
    return "rgba(255, 111, 184, 0.28)";
  }
  return colors.fresh;
}

function drawRoleBadge(position, label, fill, stroke, textColor, offsetY) {
  ctx.save();
  ctx.font = "700 12px Microsoft YaHei, PingFang SC, sans-serif";
  const width = ctx.measureText(label).width + 16;
  const badgeX = position.x - width / 2;
  const badgeY = position.y + offsetY;
  const radius = 10;

  ctx.beginPath();
  ctx.moveTo(badgeX + radius, badgeY);
  ctx.lineTo(badgeX + width - radius, badgeY);
  ctx.quadraticCurveTo(badgeX + width, badgeY, badgeX + width, badgeY + radius);
  ctx.lineTo(badgeX + width, badgeY + 22 - radius);
  ctx.quadraticCurveTo(badgeX + width, badgeY + 22, badgeX + width - radius, badgeY + 22);
  ctx.lineTo(badgeX + radius, badgeY + 22);
  ctx.quadraticCurveTo(badgeX, badgeY + 22, badgeX, badgeY + 22 - radius);
  ctx.lineTo(badgeX, badgeY + radius);
  ctx.quadraticCurveTo(badgeX, badgeY, badgeX + radius, badgeY);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = textColor;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, position.x, badgeY + 11);
  ctx.restore();
}

function drawNodes(step, now) {
  const highlightPath = new Set(step.finalPath.length > 0 ? step.finalPath : step.candidatePath);

  graph.nodes.forEach((node) => {
    const position = getNodePosition(node);
    const status = getNodeStatus(node.id, step);
    const isHover = hoverNode === node.id;
    const isSelected = selectedNodeId === node.id;
    const isStart = node.id === startNode;
    const isTarget = node.id === targetNode;
    const onPath = highlightPath.has(node.id);
    const pulse = status === "current" ? Math.sin(now / 180) * 2.6 + 3 : 0;
    const radius = nodeRadius + pulse;

    if (status === "current") {
      drawRipple(position, now, "rgba(255, 209, 102, ");
    } else if (onPath) {
      drawRipple(position, now, "rgba(137, 240, 255, ");
    }

    if (status === "queued" || onPath) {
      ctx.save();
      ctx.globalAlpha = status === "queued" ? 0.16 : 0.14;
      ctx.fillStyle = status === "queued" ? colors.queued : colors.path;
      ctx.beginPath();
      ctx.arc(position.x, position.y, radius + 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    ctx.save();
    ctx.fillStyle = nodeFill(status, node.id);
    ctx.strokeStyle = isSelected
      ? colors.white
      : isTarget
        ? colors.target
        : isStart
          ? colors.start
          : isHover
            ? colors.current
            : "rgba(255,255,255,0.12)";
    ctx.lineWidth = isSelected ? 4 : isTarget || isStart ? 3 : 2;
    ctx.beginPath();
    ctx.arc(position.x, position.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    if (isTarget || isStart) {
      ctx.beginPath();
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = isTarget ? colors.target : colors.start;
      ctx.arc(position.x, position.y, radius + 7, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.fillStyle = status === "queued" || status === "current" ? colors.darkText : colors.text;
    if (status === "done") {
      ctx.fillStyle = colors.darkText;
    }
    ctx.font = `700 ${node.label.length > 2 ? 12 : 15}px Microsoft YaHei, PingFang SC, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(node.label, position.x, position.y);

    if (node.id in step.distance) {
      ctx.font = "700 11px Microsoft YaHei, PingFang SC, sans-serif";
      ctx.fillStyle = colors.muted;
      ctx.fillText(`L${step.distance[node.id]}`, position.x, position.y + radius + 17);
    }
    ctx.restore();

    if (isStart && isTarget) {
      drawRoleBadge(position, "A / B", "rgba(255,255,255,0.12)", colors.white, colors.white, -radius - 32);
    } else if (isStart) {
      drawRoleBadge(position, "人物 A", "rgba(113, 226, 255, 0.14)", colors.start, colors.start, -radius - 32);
    } else if (isTarget) {
      drawRoleBadge(position, "人物 B", "rgba(255, 111, 184, 0.14)", colors.target, colors.target, -radius - 32);
    }
  });
}

function draw(now) {
  if (activeScreen !== "demo") {
    requestAnimationFrame(draw);
    return;
  }

  if (!cssWidth || !cssHeight) {
    resizeCanvas();
  }

  if (!cssWidth || !cssHeight) {
    requestAnimationFrame(draw);
    return;
  }

  const step = currentStep();
  ctx.clearRect(0, 0, cssWidth, cssHeight);
  drawBackdrop(now);
  drawEdges(step, now);
  drawNodes(step, now);
  requestAnimationFrame(draw);
}

function nodeAtPoint(x, y) {
  for (let index = graph.nodes.length - 1; index >= 0; index -= 1) {
    const node = graph.nodes[index];
    const position = getNodePosition(node);
    if (Math.hypot(position.x - x, position.y - y) <= nodeRadius + 10) {
      return node;
    }
  }
  return null;
}

function pointerPosition(event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function edgeExists(fromId, toId) {
  return graph.edges.some(([left, right]) => edgeKey(left, right) === edgeKey(fromId, toId));
}

function addEdge(fromId, toId) {
  if (fromId === toId || edgeExists(fromId, toId)) {
    linkDraftId = null;
    updateUI();
    return;
  }
  graph.edges.push([fromId, toId]);
  graph.modified = true;
  linkDraftId = null;
  pausePlayback();
  rebuildGraphCopy();
}

function shortLabel(name) {
  const trimmed = name.replace(/\s+/g, "");
  return trimmed.length <= 3 ? trimmed : trimmed.slice(0, 3);
}

function addNodeAt(point) {
  const suggested = `新人物${graph.customCount + 1}`;
  const rawName = window.prompt("请输入新人物名称", suggested);
  if (rawName === null) {
    return;
  }

  const name = rawName.trim() || suggested;
  const normalized = toNormalizedPosition(point);
  graph.customCount += 1;
  const id = `custom-${graph.customCount}`;

  graph.nodes.push({
    id,
    label: shortLabel(name),
    title: name,
    role: "用户自定义的人物节点",
    x: normalized.x,
    y: normalized.y,
    custom: true
  });

  graph.modified = true;
  selectedNodeId = id;
  pausePlayback();
  rebuildGraphCopy();
}

function advanceIfPlaying(now) {
  if (playing && now - lastAdvanceAt >= Number(speedRange.value)) {
    lastAdvanceAt = now;
    if (stepIndex >= steps.length - 1) {
      pausePlayback();
    } else {
      nextStep();
    }
  }
  requestAnimationFrame(advanceIfPlaying);
}

canvas.addEventListener("pointermove", (event) => {
  const point = pointerPosition(event);
  const node = nodeAtPoint(point.x, point.y);
  hoverNode = node ? node.id : null;
  canvas.style.cursor = node ? (event.shiftKey ? "crosshair" : "pointer") : "default";
});

canvas.addEventListener("pointerleave", () => {
  hoverNode = null;
  canvas.style.cursor = "default";
});

canvas.addEventListener("click", (event) => {
  const point = pointerPosition(event);
  const node = nodeAtPoint(point.x, point.y);

  if (!node) {
    if (!event.shiftKey) {
      selectedNodeId = null;
      linkDraftId = null;
      updateUI();
    }
    return;
  }

  if (event.shiftKey) {
    if (!linkDraftId) {
      linkDraftId = node.id;
      selectedNodeId = node.id;
      updateUI();
      return;
    }
    addEdge(linkDraftId, node.id);
    return;
  }

  selectedNodeId = node.id;
  linkDraftId = null;
  updateUI();
});

canvas.addEventListener("dblclick", (event) => {
  const point = pointerPosition(event);
  if (nodeAtPoint(point.x, point.y)) {
    return;
  }
  addNodeAt(point);
});

screenButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(button.dataset.screenTarget);
  });
});

startSelect.addEventListener("change", (event) => {
  startNode = event.target.value;
  selectedNodeId = startNode;
  pausePlayback();
  rebuildGraphCopy();
});

targetSelect.addEventListener("change", (event) => {
  targetNode = event.target.value;
  selectedNodeId = targetNode;
  pausePlayback();
  rebuildGraphCopy();
});

setStartBtn.addEventListener("click", () => {
  if (!selectedNodeId) {
    return;
  }
  startNode = selectedNodeId;
  pausePlayback();
  rebuildGraphCopy();
});

setTargetBtn.addEventListener("click", () => {
  if (!selectedNodeId) {
    return;
  }
  targetNode = selectedNodeId;
  pausePlayback();
  rebuildGraphCopy();
});

playBtn.addEventListener("click", () => {
  if (stepIndex >= steps.length - 1) {
    setStep(0);
  }
  playing = !playing;
  lastAdvanceAt = performance.now();
  syncControls();
});

nextBtn.addEventListener("click", () => {
  pausePlayback();
  nextStep();
});

prevBtn.addEventListener("click", prevStep);
resetBtn.addEventListener("click", resetTraversal);
graphBtn.addEventListener("click", () => loadTemplate((graphIndex + 1) % graphTemplates.length));
restoreBtn.addEventListener("click", () => loadTemplate(graphIndex));
gradeQuizBtn.addEventListener("click", gradeExercises);
resetExerciseBtn.addEventListener("click", resetExercises);

speedRange.addEventListener("input", () => {
  lastAdvanceAt = performance.now();
});

window.addEventListener("resize", resizeCanvas);

showScreen(activeScreen);
startLoadingSequence();
resizeCanvas();
rebuildGraphCopy();
requestAnimationFrame(draw);
requestAnimationFrame(advanceIfPlaying);
