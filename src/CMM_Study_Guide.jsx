import { useState } from "react";
import transformA from "./assets/coordinatetransformations_all.png";
import transformB from "./assets/Transformationmatrix.png";
import fk1 from "./assets/forwardkinematiks 1.png";
import fk2 from "./assets/forwardkinematiks 2.png";
import fk3 from "./assets/forwardkinematiks 3.png";
import fk4 from "./assets/forwardkinematiks 4.png";
import ik1 from "./assets/inversekinematiks1.png";
import ik2 from "./assets/inversekinematiks2.png";
import ik3 from "./assets/inversekinematiks3.png";
import ik4 from "./assets/inversekinematiks4.png";
import ik5 from "./assets/inversekinematiks5.png";
import ik6 from "./assets/inversekinematiks6.png";
import ik7 from "./assets/inversekinematiks7.png";
import ik8 from "./assets/inversekinematiks8.png";
import ik9 from "./assets/inversekinematiks9.png";
import to1 from "./assets/transformations_to1.png";
import to2 from "./assets/transformations_to2.png";
import to3 from "./assets/transformations_to3.png";
import to4 from "./assets/transformations_to4.png";
import to5 from "./assets/transformations_to5.png";
import to6 from "./assets/transformations_to6.png";
import to7 from "./assets/transformations_to7.png";
import to8 from "./assets/transformations_to8.png";
import to9 from "./assets/transformations_to9.png";
import to10 from "./assets/transformations_to10.png";
import to11 from "./assets/transformations_to11.png";
import to12 from "./assets/transformations_to12.png";
import to13 from "./assets/transformations_to13.png";
import to14 from "./assets/transformations_to14.png";
import to15 from "./assets/transformations_to15.png";
import to16 from "./assets/transformations_to16.png";
import to17 from "./assets/transformations_to17.png";


const topics = [
  {
    id: "l01",
    label: "L1 · Intro & Math Foundations",
    color: "#e8f4fd",
    accent: "#2563eb",
    icon: "🧱",
    sections: [
      {
        title: "Course Overview",
        content: `**Computational Models of Motion (263-5807-00L)** covers the mathematical foundations and computational tools needed to generate motion for digital humans, virtual creatures, and robots — with applications in movies, video games, mixed reality, and robotics.

Topics include: 3D representations, keyframing, character rigs, forward/inverse kinematics, motion capture, data-driven methods, trajectory optimization, and learning-based methods.`
      },
      {
        title: "Linear Transforms & Rotation Matrices",
        content: `A **linear map** preserves addition and scalar multiplication. An **affine map** is a linear map plus a translation.

**Rotation matrix R** is a 3×3 orthonormal matrix:
- Determinant = 1
- R⁻¹ = Rᵀ (inverse equals transpose)
- Columns of R encode where the local x, y, z axes point in world space

**Converting local → world coordinates:**
> x = p + R·x̄

where x̄ is the point in local frame, p is the origin of the local frame in world space, and R is the orientation.

**Composing rotations:** multiply matrices left-to-right: ᵂRc = ᵂRp · ᵖRc`
      },
      {
        title: "Rotation Representations",
        content: `Multiple ways to represent 3D orientations:

| Representation | Description | Notes |
|---|---|---|
| **Rotation Matrix** | 3×3 orthonormal matrix | 9 numbers, easy to compose |
| **Euler Angles** | 3 sequential rotations (α, β, γ) | Intuitive but gimbal lock possible |
| **Quaternions** | 4D unit vector | Compact, smooth interpolation |
| **Exponential Maps** | Axis-angle as 3D vector | Good for optimization |

**Euler angles** for root: ᵂRroot = Rα · Rβ · Rγ`
      },
      {
        title: "Geometry Representations",
        content: `**Explicit representations** (store surface geometry directly):
- Point cloud, polygon mesh (most common in graphics), triangle meshes, subdivision surfaces, NURBS, L-systems

**Implicit representations** (define surface as level set):
- Level sets, signed distance functions (SDFs), implicit neural representations (NeRFs)

**Triangle Meshes:**
- Vertices: list of (x, y, z) positions
- Triangles: list of index triples (i, j, k) referencing vertices
- Materials mapped via UV textures (UV map → barycentric interpolation → texture lookup)`
      },
      {
        title: "Articulated Rigid Body Systems",
        content: `Characters and robots are modeled as **tree-structured articulated rigid body systems**:
- **Bodies (nodes):** rigid parts, each with a local coordinate frame (COM position + orientation)
- **Joints (edges):** connect parent-child body pairs

**Joint definition:**
- p̄p: joint position in parent's local frame
- p̄c: joint position in child's local frame
- v̄: rotation axis (for 1-DOF joints)

**Common joint types:** hinge (1-DOF, knee), ball (3-DOF, hip), saddle, condyloid, pivot

**Pose representations:**
1. **Maximal coordinates:** (x₀, R₀, x₁, R₁, …) for all n bodies → 6n values. Can represent infeasible poses.
2. **Generalized/reduced coordinates:** (x_root, α, β, γ, θ₀, θ₁, …, θₙ₋₂) → only 6+(n-1) values. Only feasible poses. Used for FK/IK.

**File formats:** FBX/DAE (CG), URDF/SDF (robotics)`
      },

      {
        title: "Transformation Matrix",
        content: `Transformation matrices combine rotation and translation into a single homogeneous matrix useful for composing transforms and transforming points.

Left: 3×3 rotation (R) + translation (t) visual.  
Right: 4×4 homogeneous matrix application to a point.

![transform1]

![transform2]`
      }
    ]
  },
  {
    id: "l02",
    label: "L2 · FK & Numerical Optimization",
    color: "#f0fdf4",
    accent: "#16a34a",
    icon: "📐",
    sections: [
      {
        title: "Forward Kinematics (FK)",
        content: `**Forward Kinematics:** Given a pose q (joint angles + root position/orientation), compute world coordinates of any point on the character.

**Recursive algorithm** — walk up the kinematic chain from the target body to the root:

For a point p̄ on body b₃, with joints j₂ → j₁ → j₀ (root):
1. Express p in body b₂'s frame after rotating about j₂:
   > p_b2 = j₂.p̄p + R(j₂.v̄, θ₂) · (j₂.p̄c → p_b3)
2. Express result in body b₁'s frame after j₁ rotation similarly
3. Repeat to root, then apply final root translation

**Pseudocode:**
\`\`\`
FK(pose q, point p, body b):
  j = b.parentJoint
  if j == NULL:  // root
    return x_root + R_root * p
  return FK(q, j.pp + R(j.v, θ) * (j.pc → p), j.parentBody)
\`\`\`

**Key insight:** FK gives you a function p(q, p̄) — the world position as a function of the pose. This is the foundation for both animation and IK.

## Images
![fk1]

![fk2]

![fk3]

![fk4]`
      },
      {
        title: "Poses: Where Do They Come From?",
        content: `Three main sources:

1. **Keyframing (manual):** Artist specifies poses at key times; intermediate frames are interpolated. Powerful but tedious.

2. **Motion capture (data-driven):** Optical/inertial sensors record real human movement as pose sequences. Used for playback, retargeting, and motion graph construction.

3. **Procedural (simulation/optimization):** Physics simulation or trajectory optimization generates poses from dynamics.`
      },
      {
        title: "Optimization Fundamentals",
        content: `**Standard form of a continuous optimization problem:**
> min f₀(x)  subject to  constraints on x

The **optimal x*** minimizes f₀ among all feasible x. To maximize: flip the sign of f₀.

**Local vs. Global minima:**
- Global minimum: absolute best
- Local minimum: best among neighbors
- For nonconvex problems, we typically only find local minima

**Optimality conditions (1st and 2nd order):**
- 1st order (necessary): ∇f₀(x*) = 0
- 2nd order (sufficient): ∇²f₀(x*) is positive semi-definite (PSD): uᵀAu ≥ 0 for all u

**Convex optimization:** If domain and objective are both convex → any local minimum is global. Solvable in polynomial time.

**Discrete vs. Continuous:** Discrete (integers) is often NP-hard. Continuous with gradients is tractable in many cases.`
      },
      {
        title: "Gradient Descent & Newton's Method",
        content: `**Gradient:** Vector of partial derivatives ∇f(x). Points in direction of steepest ascent. Gradient descent moves opposite to gradient.

**Gradient Descent update rule:**
> x_{k+1} = xₖ − τ · ∇f(xₖ)

Step size τ: too large → oscillation/divergence; too small → slow. Use **line search** (e.g., Armijo-Wolfe conditions) for adaptive τ.

**Directional derivative:** Du f = uᵀ∇f — how f changes along direction u.

**Newton's Method** (second-order):
> Δx = −[∇²f(x₀)]⁻¹ · ∇f(x₀)

Uses the Hessian (matrix of second derivatives) for a quadratic approximation. Converges much faster than gradient descent for convex problems.

**Gauss-Newton** for nonlinear least squares — always PSD, avoids Hessian inversion issues.

**Key questions to understand:**
- What happens if the Hessian is not PSD?
- How to check derivatives with finite differences?
- What does regularization mean geometrically and in terms of objective?
- Why is line search necessary?`
      },
      {
        title: "Jacobian",
        content: `The **Jacobian J** of a vector-valued function x(q): ℝⁿ → ℝᵐ is the m×n matrix of partial derivatives:

> J_ij = ∂xᵢ/∂qⱼ

In kinematics, J tells you how the end-effector position changes with each joint angle. This is central to IK.

**Hessian** = Jacobian of the gradient = matrix of second-order partial derivatives.`
      }
    ]
  },
  {
    id: "l03",
    label: "L3 · Inverse Kinematics & Motion Data",
    color: "#fefce8",
    accent: "#ca8a04",
    icon: "🦾",
    sections: [
      {
        title: "Inverse Kinematics (IK)",
        content: `**Problem:** Given a target position x̃ for an end-effector, find joint angles θ such that FK(θ) = x̃.

**Formulated as optimization:**
> E(θ) = ½ ||x(θ) − x̃||²

Minimize by gradient descent using the Jacobian:
> dE/dθ = Jᵀ(x(θ) − x̃)

**Jacobian for a 1-DOF joint:** The joint's rotation axis v̄ crossed with the vector from joint to end-effector gives ∂x/∂θ.

**Common extensions:**
- Joint angle limits (box constraints on θ)
- Pose regularizers (penalize distance from a rest pose)
- Objectives on end-effector orientation (not just position)
- Multiple end-effector targets

**Applications:** Motion capture retargeting, full-body pose estimation, teleoperation, natural motion authoring, walking controllers

## Images
![ik1]

![ik2]

![ik3]

![ik4]

![ik5]

![ik6]

![ik7]

![ik8]

![ik9]`
      },
      {
        title: "Motion Capture & Data-Driven Methods",
        content: `**Motion capture** records sequences of poses over time. These clips can be:
1. **Played back directly** as animations
2. **Chopped, re-sequenced, and blended** to synthesize new motions

For seamless transitions you need:
- A **pose similarity measure** (closer poses → smoother transitions)
- A **controller** that decides which path to take at branch points
- **Smoothing/fixing routines** for artifacts`
      },
      {
        title: "Motion Graphs",
        content: `**Motion Graphs** [Kovar et al., SIGGRAPH 2002]:
- Build a graph where **nodes** = animation frames, **edges** = motion clips
- Transitions allowed at frames with sufficiently similar poses (local minima of a pose similarity matrix)
- Path planning on this graph enables diverse interactive animation

**Construction:**
1. Compute pairwise distance matrix between all frames
2. Find local minima (transition points)
3. Build graph with edges for valid transitions`
      },
      {
        title: "Motion Matching",
        content: `**Motion Matching / Motion Fields:** Every frame, search the entire database for the clip whose current frame best matches the desired future trajectory.

**Features:** position, facing direction, foot/hip joint positions and velocities

**Nearest neighbor search** (brute force → KD-tree or clustering for efficiency; PCA to reduce feature dimensionality)

Called "the secret sauce behind many of the best animation systems in games today" — used in AAA games (Ubisoft, Epic/Unreal Engine).

**Learned Motion Matching:** Replace each component (projection, stepping, decomposition) with neural networks for compactness and generalization.`
      }
    ]
  },
  {
    id: "l04",
    label: "L4 · Trajectory Optimization",
    color: "#fdf4ff",
    accent: "#9333ea",
    icon: "🚀",
    sections: [
      {
        title: "From IK to Motion Planning",
        content: `**IK** finds a single pose — no notion of time, dynamics, or the path taken.

**Motion trajectory:** The path a dynamical system takes through state space over time. Physical realism requires:
1. The **dynamics** of the system (physics)
2. A meaningful **sequence of control inputs/actions**

**Trajectory optimization** finds a trajectory that minimizes a cost function while satisfying dynamics constraints.`
      },
      {
        title: "Trajectory Optimization Formulation",
        content: `**General formulation (direct transcription):**

> min_{x₁…xₙ, u₀…uₙ₋₁}  Lf(xₙ) + Σ L(xᵢ, uᵢ)
>
> subject to:  ẋᵢ = f(xᵢ, uᵢ)  ∀i  (dynamics constraints)
>              + additional constraints

Where:
- **xᵢ** = state at time i (position, velocity, etc.)
- **uᵢ** = control inputs at time i (forces, torques)
- **L** = running cost (e.g., energy, smoothness)
- **Lf** = terminal cost (goal achievement)
- **Defect** = ẋᵢ − f(xᵢ, uᵢ): zero when dynamics satisfied

**Discretization:** ẋ ≈ (xᵢ − xᵢ₋₁)/h or (xᵢ₊₁ − xᵢ₋₁)/2h

## Images
![to1]

![to2]

![to3]

![to4]

![to5]

![to6]

![to7]

![to8]

![to9]

![to10]

![to11]

![to12]

![to13]

![to14]

![to15]

![to16]

![to17]`
      },
      {
        title: "Transcription Methods",
        content: `**Direct Transcription:**
- State and control as piecewise-linear at knot points
- Dynamics constraints couple consecutive states

**Direct Collocation:**
- State x(t) as piecewise cubic, control u(t) as piecewise linear
- Evaluate defect at midpoint (collocation point) rather than knot points
- Better accuracy for same number of decision variables
- x(t) = hermite cubic interpolation using xᵢ, ẋᵢ, xᵢ₊₁, ẋᵢ₊₁

**Direct Single Shooting:**
- Only controls uᵢ are decision variables
- States computed by numerical integration (no dynamics constraints in optimization)
- Fewer variables but gradients harder to compute

**Choosing a method:**
- Transcription: good for smooth, well-constrained problems
- Collocation: better accuracy-per-variable tradeoff
- Shooting: simpler formulation`
      },
      {
        title: "Constrained Optimization (KKT)",
        content: `For problems with equality/inequality constraints, use **Lagrange multipliers / KKT conditions**.

**Equality constraint** h(x) = 0:
> L(x, λ) = f₀(x) + λᵀh(x)
> ∇L = 0 at optimum

**Inequality constraint** g(x) ≤ 0:
> Complementary slackness: λᵢgᵢ(x) = 0 and λᵢ ≥ 0

In practice, trajectory optimization with contact constraints uses these to enforce non-penetration, friction cones, etc.`
      }
    ]
  },
  {
    id: "l05",
    label: "L5 · Sampling-Based Planning & Feedback Control",
    color: "#fff1f2",
    accent: "#dc2626",
    icon: "🗺️",
    sections: [
      {
        title: "Why Sampling-Based Planning?",
        content: `Optimization-based methods have no guarantee of finding feasible solutions in the presence of:
- **Obstacles** (collision constraints are non-convex)
- **Nonlinear dynamics**
- **Narrow passages** in configuration space

**Sampling-based planners are global** — they can find solutions that optimization would miss if poorly initialized. They can also provide initial guesses for trajectory optimization.

**Key insight:** Collision checking is simple and cheap; computing an explicit free-space representation is hard.

**Configuration space (C-space):** Represent the entire robot state as a single point. Planning happens in this abstract space.`
      },
      {
        title: "Probabilistic Roadmap (PRM)",
        content: `**Two-phase algorithm:**

1. **Offline (roadmap construction):**
   - Sample random configurations in C-space
   - Collision-check each sample (vertex validation)
   - Connect nearby samples with local planners (edge validation)
   - Build a graph of collision-free paths

2. **Online (search):**
   - Connect start/goal to roadmap
   - Run graph search (A*, weighted A*) to find path

**PRM*:** Optimal variant — use radius r(n) = γ(log n / n)^(1/d) for near-node queries → asymptotically optimal.

**Lazy PRM:** Defer edge collision checking to query time.

**Metrics:** Euclidean distance is common; for rotations, use geodesic distance on SO(3).`
      },
      {
        title: "Rapidly-Exploring Random Tree (RRT)",
        content: `**Single-query algorithm** — no need to explore whole space.

**Basic RRT:**
1. Sample random config q_rand
2. Find nearest node q_near in tree
3. Steer from q_near toward q_rand (step size δ)
4. If collision-free, add new node and edge

**RRT*:** Optimal variant:
- After steering, find all nodes within radius r
- Connect new node to parent with minimum cost
- **Rewire:** check if going through new node improves cost for neighbors

**RRT-Connect (bidirectional):** Build two trees (start + goal), try to connect them every step. Much faster in practice.

**Theoretical properties:**
- **Probabilistic completeness:** P(finding path) → 1 as samples → ∞
- **Asymptotic optimality** (RRT*): solution cost → optimal as samples → ∞

**Post-processing:** Smooth initial solutions with random shortcutting or trajectory optimization.`
      },
      {
        title: "Open-Loop vs Closed-Loop Control",
        content: `**Open-loop (feedforward) control:**
- Pre-computed control sequence played back without sensing
- Trajectory optimization provides these inputs
- Problem: drift from modeling errors, external disturbances → errors accumulate

**Closed-loop (feedback) control:**
> State → Measure Error → Controller → System → New State (loop)

The controller uses the **measured error** between desired and actual state to compute corrective actions. Different states → different actions.`
      },
      {
        title: "PID Control",
        content: `**PD Controller (most used in robotics):**
> F = kp · e + kd · ė

- **kp (proportional gain):** restoring force like a spring
- **kd (derivative gain):** damping — reduces oscillation
- **e = x̄ − x** (position error), **ė** (velocity error)

Setting kd = 2√kp gives critically damped (no oscillation) response.

**Full PID:**
> F = kp · e + kᵢ · ∫e dt + kd · ė

The integral term eliminates steady-state error (e.g., from constant external forces). Often omitted because it can cause instability.

**Implicit PD controller:** Evaluate error at next time step (not current) for stability with larger step sizes:
> ā = kp(x̄ − xₜ₊₁) + kd(ẋ̄ − ẋₜ₊₁)

**PD output choice:** Better to output **target accelerations** (model-independent) and use inverse dynamics to get forces, rather than outputting forces directly.

**Whole Body Control (WBC):** Formulate a QP at each step with objectives for COM tracking, end-effector tracking, and contact constraints.

**Model Predictive Control (MPC):** Solve a short-horizon trajectory optimization at each time step, execute first action, re-solve. Combines planning and feedback.`
      }
    ]
  },
  {
    id: "l06",
    label: "L6 · RL Foundations (MDPs, Q-learning, Policy Gradient)",
    color: "#f0f9ff",
    accent: "#0284c7",
    icon: "🤖",
    sections: [
      {
        title: "Why Reinforcement Learning?",
        content: `**Feedforward control:** kinematic only, no physics, can't handle terrain changes.

**Optimization-based control:** nonconvex, uncertainty, model mismatch.

**RL:** Learn emerging behavior through **interaction** with environment (physics simulator):
> Agent takes Action → Environment gives Reward + new State → Repeat

**Key distinction from supervised learning:**
- SL: learn mapping from labeled (state, action) pairs (i.i.d. data)
- RL: data generated by self-play (non-i.i.d.), learn from rewards`
      },
      {
        title: "Markov Decision Processes (MDPs)",
        content: `An MDP is defined by the tuple (S, A, T, R, s₀, γ, H):
- **S:** set of states
- **A:** set of actions
- **T(s'|s,a):** transition function (world dynamics)
- **R(s,a):** reward function
- **s₀:** start state
- **γ ∈ [0,1]:** discount factor (weight future vs. present reward)
- **H:** planning horizon

**Policy π(a|s):** mapping from state to action (deterministic or stochastic).

**Goal:** Find optimal policy π* that maximizes expected discounted sum of rewards:
> E[Σᵢ γⁱ R(sᵢ, aᵢ)]

**Markov property:** Next state depends only on current state + action (not history).`
      },
      {
        title: "Value & Policy Iteration",
        content: `**Value function V^π(s):** Expected sum of discounted rewards from state s, following policy π.

**Optimal value V*(s):** Same but acting optimally.

**Bellman optimality equation:**
> V*(s) = max_a [R(s,a) + γ Σ_{s'} T(s'|s,a) V*(s')]

**Value Iteration:** Initialize V₀, then iterate:
> Vₖ(s) = max_a [R(s,a) + γ Σ_{s'} T(s'|s,a) Vₖ₋₁(s')]

Converges because it's a contraction. Requires sweeping all states + knowing T.

**Policy Iteration:** Alternate between:
1. **Policy evaluation:** compute V^π for current π
2. **Policy improvement:** update π using V^π

Converges faster but same asymptotic cost per iteration.

**Limitation:** Both need full state sweep and transition model → only for small, discrete toy problems.`
      },
      {
        title: "Q-Learning & DQN",
        content: `**Q-function Q*(s,a):** Expected return starting from s, taking action a, then acting optimally.
> Q*(s,a) = R(s,a) + γ Σ_{s'} T(s'|s,a) max_{a'} Q*(s',a')

**Tabular Q-learning (model-free):**
> Q(s,a) ← Q(s,a) + α [R + γ max_{a'} Q(s',a') − Q(s,a)]

- **Off-policy:** learns optimal Q even while acting suboptimally (ε-greedy)
- ε-greedy: random action with prob ε, greedy otherwise

**Deep Q-Network (DQN) [DeepMind 2013]:**
Parametrize Q with neural network. Same CNN for all 49 Atari games; ~human-level on 29.

**The deadly triad** (overestimation bias):
- Function approximation + bootstrap + off-policy → unstable training
- Solutions: **replay buffer** (break correlation), **double Q-learning** (separate target network)

**Limitation of Q-learning:** Discrete action spaces only (need argmax over A).`
      },
      {
        title: "Policy Gradient (REINFORCE)",
        content: `**Policy-based methods:** directly parametrize policy π_θ(a|s) and optimize θ.

For **continuous actions:** π_θ(a|s) = 𝒩(μ_θ(s), Σ_θ(s))

**Policy Gradient theorem (likelihood ratio trick):**
> ∇_θ J(θ) = E_τ [Σₜ ∇_θ log π_θ(aₜ|sₜ) · R(τ)]

Intuition: increase probability of actions in high-reward trajectories; decrease for low-reward.

**REINFORCE algorithm:**
1. Collect N trajectories following π_θ
2. Compute returns Rₜ for each step
3. Update: θ ← θ + α Σ_τ Σₜ ∇_θ log π_θ(aₜ|sₜ) · Rₜ

**Problem: high variance.** Solutions:
- **Causality:** use reward-to-go (future rewards only, not past)
- **Baseline subtraction:** subtract b(s) from returns (still unbiased if b doesn't depend on a)
  → Popular choice: b(s) = V^π(s) — leads to the Advantage function

**Advantage function:** A(s,a) = Q(s,a) − V(s) — "how much better is this action than average?"`
      }
    ]
  },
  {
    id: "l07",
    label: "L7 · Actor-Critic, GAE, PPO, DeepMimic",
    color: "#f0fdf4",
    accent: "#15803d",
    icon: "🎭",
    sections: [
      {
        title: "Actor-Critic Architecture",
        content: `Combine policy gradient (actor) with value function estimation (critic) to reduce variance:

- **Actor (policy π_θ):** decides which action to take
- **Critic (value V_φ):** evaluates how good the state/action is (reduces gradient variance)

**Update rules:**
- Critic: minimize squared Bellman residual
- Actor: policy gradient weighted by advantage estimate A = R_t^go − V_φ(s)

Can become unstable for large networks. Need careful gradient clipping.`
      },
      {
        title: "Generalized Advantage Estimation (GAE)",
        content: `**Trade-off in advantage estimation:**
- Monte Carlo (full rollout): zero bias, HIGH variance
- 1-step TD: high bias, LOW variance

**GAE** combines multiple n-step returns with exponential weighting:
> Â_t^GAE = Σ_{l=0}^∞ (γλ)^l δ_{t+l}

where δₜ = rₜ + γV(sₜ₊₁) − V(sₜ) is the TD residual.

- **λ=1:** reduces to Monte Carlo (high variance, low bias)
- **λ=0:** reduces to 1-step TD (low variance, high bias)
- **λ ∈ (0,1):** smooth interpolation — λ ≈ 0.95 is common in practice`
      },
      {
        title: "Trust Region Policy Optimization (TRPO)",
        content: `**Problem with naive policy gradient:** First-order optimizers don't know where the approximation is good → can take catastrophically large steps → bad policy → bad data → can't recover.

**TRPO [Schulman et al., 2015]:**
> max_θ E[π_θ(a|s)/π_θ_old(a|s) · Â]
> subject to: KL(π_θ_old, π_θ) ≤ δ

- Maximize advantage estimated from old policy
- Constrain KL divergence (distance between distributions) to trust region
- Uses importance sampling to reuse old data: ratio = π_new/π_old

**Limitation:** Trust region constraint is expensive to enforce (conjugate gradient + line search). Hard with shared network architectures.`
      },
      {
        title: "Proximal Policy Optimization (PPO)",
        content: `**PPO** is the dominant RL algorithm for robotics and animation. Simpler than TRPO, still stable.

**PPO v1 (Dual Descent TRPO):** Add KL penalty to objective instead of hard constraint.

**PPO v2 (Clipped Surrogate Loss):**
> L^CLIP(θ) = E[min(rₜ(θ)·Âₜ, clip(rₜ(θ), 1−ε, 1+ε)·Âₜ)]

where rₜ(θ) = π_θ(a|s)/π_θ_old(a|s)

- If advantage is positive: only increase probability up to 1+ε
- If advantage is negative: only decrease probability down to 1−ε
- "Be pessimistic" — clip stops the policy from changing too much

**Practical PPO:**
1. Collect data with N parallel environments
2. Compute GAE advantages
3. Update for K epochs on the collected batch
4. Repeat

**Uses:** OpenAI Five (99.4% win rate in Dota 2), LLM fine-tuning (RLHF), robotics locomotion.`
      },
      {
        title: "DeepMimic",
        content: `**DeepMimic [Peng et al., SIGGRAPH 2018]:** Physics-based character animation via motion imitation with RL.

**Setup:** Physics simulator + RL agent. Observation: current state + **phase variable** (position in reference motion cycle). Actions: joint angle targets for PD controllers.

**Reward:** Weighted combination of imitation reward (pose, velocity, end-effector matching reference) and task reward.

**Key tricks:**
1. **Phase variable:** Input to policy indicating where in the motion cycle we are → avoids policy confusion between, e.g., left foot forward vs. right foot forward
2. **Reference State Initialization (RSI):** Reset episode to a random frame of the reference motion → learn all parts equally, better exploration
3. **Early Termination:** End episode if character falls → learn to stay upright

**Distinction from supervised learning:**
- SL: mimic expert *actions*
- DeepMimic: mimic expert *states* (actions are inferred by RL → more robust)

Foundation for Boston Dynamics, Unitree, and many other modern robotic systems.`
      }
    ]
  },
  {
    id: "l08",
    label: "L8 · SAC, Sim-to-Real, Domain Randomization",
    color: "#fefce8",
    accent: "#a16207",
    icon: "🌐",
    sections: [
      {
        title: "Soft Actor-Critic (SAC)",
        content: `**SAC** is an off-policy actor-critic algorithm for continuous action spaces. Key idea: **Maximum Entropy RL** — add entropy bonus to reward to encourage exploration.

**Maximum Entropy objective:**
> J(π) = Σₜ E[rₜ + α · H(π(·|sₜ))]

H = entropy = "fuzziness" of policy distribution. Higher entropy → more exploration.

**SAC learns three functions:**
1. **Soft Q-function** (two networks, take min to avoid overestimation)
2. **Value function** (minimize squared error)
3. **Policy** (pushed toward optimal policy for max-entropy problem)

**Soft Bellman backup:**
> V(s) = E_a[Q(s,a) − α log π(a|s)]

**SAC vs PPO:**
- SAC: off-policy, more sample-efficient (uses replay buffer), better for real-world data collection
- PPO: on-policy, massive parallelism in simulation, often wins in wall-clock time
- In practice: PPO dominates for sim2real; SAC better for real-world fine-tuning or few parallel envs`
      },
      {
        title: "Reward Engineering",
        content: `"Reward shapes the policy more than the algorithm does."

**Dense vs sparse rewards:**
- Sparse: e.g., +1 only at goal. Easy to specify, hard to learn (credit assignment problem)
- Dense: reward at every step. Easier to learn but can lead to reward hacking

**Common reward shapes for one term:**
- Linear: r = k · x
- Quadratic: r = −k · x²
- Exponential: r = exp(−x²/2σ²) — parameter σ controls tolerance width

**Additive vs multiplicative reward combination:**
- Additive: r = r₁ + r₂ + … allows partial credit
- Multiplicative: r = r₁ · r₂ · … — all terms must be satisfied

**Danger:** Dense shaped rewards can lead to bizarre learned behaviors that technically maximize reward but violate intent (reward hacking).`
      },
      {
        title: "Sim-to-Real: The Three Gaps",
        content: `Policy trained in simulation must transfer to the real robot. Three sources of mismatch:

1. **Observation gap:** Simulator gives perfect state; real sensors are noisy, delayed, partial. Solution: add noise to observations in sim; use **phase variables** as additional observation signals.

2. **Dynamics gap:** Simulator can't capture everything (soft contacts, material properties, unmodeled dynamics). Solution: domain randomization of physics params.

3. **Actuation gap:** Real motors have latency, compliance, nonlinear response; sim has ideal actuators. Solution: actuator networks (learn the motor response from real data).

**Co-evolution of actuators and sim2real:** QDD (quasi-direct-drive) actuators with low gear ratio are more backdriveable → more linear, easier to simulate → enabled the sim2real boom after ~2018.`
      },
      {
        title: "Domain Randomization (DR)",
        content: `**Goal:** Train in a distribution of simulation environments so the policy transfers to the unknown real environment.

**Math intuition:** Find policy that maximizes expected return over a distribution of environment parameters (friction, mass, damping, kp, etc.):
> max_π E_{φ~P(φ)} [J(π, φ)]

**At each training iteration:**
1. Sample environment parameters from the distribution
2. Collect data
3. Update policy as usual

**What to randomize (DR recipe):**
- Friction coefficients
- Body masses
- PD gains (kp, kd)
- Observation noise
- Push disturbances

**Assignment 3 DR flags:** randomize_friction, randomize_base_mass, push_robots, dynamic_randomization.

**Where DR + parallel RL struggles:** contact-rich manipulation, long-horizon tasks (errors compound), hard safety constraints.`
      },
      {
        title: "Model-Based RL (MBRL)",
        content: `**Model-free RL:** policy learned purely from samples (no explicit dynamics model).

**Model-based RL:** simultaneously learn the policy **and** a world model (dynamics model):
1. Collect real data
2. Fit a model of the environment
3. Plan/optimize policy using the model
4. Repeat

**Advantage:** Much more sample-efficient (can generate synthetic rollouts).

**Challenge:** Model errors compound over planning horizons → model exploitation.

**Examples:** PILCO, PETS, Dreamer. Often 10-100× more sample efficient than model-free, but harder to tune.`
      }
    ]
  },
  {
    id: "l09",
    label: "L9 · Motion Manifolds & VAEs",
    color: "#fdf4ff",
    accent: "#7c3aed",
    icon: "🧬",
    sections: [
      {
        title: "Data-Driven Animation: The Big Picture",
        content: `**Goal:** Given a motion dataset, generate natural and controllable motion.

**Key design axes:**
- **Kinematic vs. Physics-based:** Kinematic models compute poses directly; physics-based simulate forces and contacts
- **Prediction vs. Model-then-control:** Directly predict next pose, or learn a model and design a controller on top
- **Non-parametric vs. Parametric:** Store data explicitly vs. compress into model parameters

**Evolution of approaches:**
State machines → Blend/decision trees → Motion Graphs → Motion Matching → Neural networks → VAEs/Diffusion`
      },
      {
        title: "Phase-Functioned Neural Networks (PFNN)",
        content: `**Problem with motion prediction:** Motion is multi-modal (walking left vs. walking right look similar) and periodic. A naive MLP confuses frames from different phases.

**PFNN [Holden et al., 2017]:**
- Condition the MLP on a **phase variable** (scalar ∈ [0,1] indicating cycle progress)
- Network weights are blended functions of phase: W(φ) = Σ_i c_i(φ) · Wᵢ
- Result: smooth, periodic, multi-modal motion prediction

**MANN (Mode-Adaptive Neural Networks) [2018]:**
- Use **Mixture of Experts** (MoE) for multi-modal motion (quadruped with many gaits)
- Gating network selects expert blend based on phase/context

**DeepPhase [Starke et al., 2022]:**
- Learn phase manifold automatically from data using a periodic autoencoder
- Handles complex, multi-modal motion libraries`
      },
      {
        title: "Tracking-Based Methods (Physics-Based)",
        content: `**Problem with kinematics:** foot sliding, ground penetration, physically implausible poses.

**Solution:** Physics-based simulation with a tracking policy:
- **Input:** current state + reference motion (+ phase variable)
- **Action:** joint torques or PD targets
- Physics engine enforces plausibility

**DeepLoco [2017]:** Hierarchical RL — high-level controller plans footsteps, low-level tracks cyclic motion. Phase variable crucial for disambiguation.

**DeepMimic [2018]:** RSI + early termination + imitation reward. (See L7)

**DReCON [2019]:** Motion matching as generator + RL tracker. Best of both worlds.`
      },
      {
        title: "Variational Autoencoders (VAEs)",
        content: `**VAE** learns a latent representation of data with a smooth, regularized latent space.

**Architecture:**
- **Encoder** q_φ(z|x): maps data → distribution over latents (Gaussian)
- **Decoder** p_θ(x|z): maps latents → data

**ELBO loss (maximize):**
> ELBO = E[log p_θ(x|z)] − KL(q_φ(z|x) || N(0,I))

= reconstruction loss − KL regularization

The KL term forces the latent space to be close to a standard Gaussian → smooth, interpolatable.

**VAE variants:**
- **CVAE (Conditional VAE):** condition decoder on additional input (e.g., action command)
- **β-VAE:** increase KL weight β to enforce more disentangled latent space
- **VQ-VAE:** discrete codebook instead of continuous Gaussian → used in MoConVQ

**Limitation:** VAEs produce blurry/averaged outputs due to Gaussian reconstruction loss.`
      },
      {
        title: "Motion VAE Applications",
        content: `**VAE-LSTM:** VAE latent space + LSTM for sequential generation. Latent is a distribution → diverse samples.

**MotionVAE [Ling et al., 2020]:**
- Conditional β-VAE with MANN-style decoder
- Learn a control policy that outputs latent variables → downstream RL controller

**ControlVAE [Yao et al., 2022]:**
- Physics-based: encoder + decoder + differentiable simulator
- Train with gradient through physics (SuperTrack-style)
- Enables tracking diverse motions in simulation

**MoConVQ [Yao et al., 2024]:**
- VQ-VAE discretizes motion into codebook tokens
- Scalable discrete motion representation for unified physics-based control
- Language-model-style token prediction for motion planning`
      }
    ]
  },
  {
    id: "l10",
    label: "L10 · Generative Motion Synthesis (GANs & Diffusion)",
    color: "#fff1f2",
    accent: "#be123c",
    icon: "✨",
    sections: [
      {
        title: "Generative Adversarial Networks (GANs)",
        content: `**GAN architecture:**
- **Generator G:** takes random noise z → generates fake data
- **Discriminator D:** classifies real vs. fake

**Training as minimax game:**
> min_G max_D [E[log D(x)] + E[log(1 − D(G(z)))]]

**Training balance is crucial:**
- Discriminator too strong → generator gets no useful gradient
- Discriminator too weak → no informative signal

**Gradient penalty:** Add ||∇D||² penalty to discriminator loss for stable training (WGAN-GP).

**Problems:**
- **Mode collapse:** Generator learns to produce one type of output (ignores diversity)
- Training instability`
      },
      {
        title: "Adversarial Motion Priors (AMP)",
        content: `**AMP [Peng et al., 2021]:** Use GAN discriminator as a **style reward** for physics-based animation.

**Idea:** Instead of designing a hand-crafted reward for "natural motion," let a discriminator learn what natural motion looks like from data.

**Reward:** r = r_style (from discriminator) + r_goal (task reward, e.g., reach target)

**GAIL (Generative Adversarial Imitation Learning):**
- No actions available in demonstrations → match state-transition distributions (s, s')
- Discriminator-as-reward → PPO/TRPO updates policy

**AMP advantages over DeepMimic tracking:**
- Can generate **novel** motions not in database
- Works with **unstructured** motion datasets (no phase labeling needed)
- More flexible and generalizable

**Follow-ups:** ASE (skill embeddings), CALM/C-ASE (conditional, avoid mode collapse), AMP for robots (locomotion style transfer)`
      },
      {
        title: "Adversarial Skill Embeddings (ASE)",
        content: `**Problem with AMP:** Still has mode collapse — discriminator is happy with subset of data.

**ASE [Peng et al., 2022]:**
- Learn a latent skill space z with a **mutual information** objective
- Diversity reward: different z should produce different behaviors
- Hierarchical: high-level policy selects z, low-level policy + AMP discriminator executes

**Prior distribution:** Uniform on sphere surface (not Gaussian, which is unbounded → unrealistic motions).

**Training:** Skill encoder trained by maximizing log-likelihood of (z, s, s') collected from policy.`
      },
      {
        title: "Diffusion Models",
        content: `**Denoising Diffusion Probabilistic Models (DDPM):**

**Forward process:** Gradually add Gaussian noise to data over T steps (Markov chain):
> q(xₜ|xₜ₋₁) = N(xₜ; √(1−βₜ)xₜ₋₁, βₜI)

**Reverse process:** Learn to denoise step by step:
> p_θ(xₜ₋₁|xₜ) = N(xₜ₋₁; μ_θ(xₜ,t), Σ_θ(xₜ,t))

**Training:** Minimize reconstruction loss (predict added noise):
> L = E[||ε − ε_θ(xₜ, t)||²]

**Conditioning:**
- **Classifier guidance:** train classifier on noisy data, use gradient to steer sampling
- **Classifier-free guidance:** train unconditional + conditional jointly; at inference, combine predictions

**MDM (Motion Diffusion Model) [Tevet et al., 2022]:**
- Transformer denoiser for motion sequences
- Conditioned on text via CLIP embedding
- Classifier-free training; geometric loss terms

**PhysDiff:** Incorporates physics simulation in the diffusion loop.`
      },
      {
        title: "Generative Models Comparison",
        content: `| Property | VAE | GAN | Diffusion |
|---|---|---|---|
| Training Stability | Stable | Unstable | Stable |
| Sample Diversity | Moderate | Moderate | High |
| Output Sharpness | Blurry | Sharp | Sharp |
| Control/Conditioning | Simple | Complex | Flexible (guidance) |
| Inference Speed | Fast | Fast | Slow (many steps) |
| Best For | Latent interpolation | Stylized generation | Multi-modal & controllable |

**Current challenges in character animation:**
- **Retargeting:** transfer motion between skeletons with different proportions
- **Motion in-betweening / inpainting:** fill gaps between keyframes
- **Motion editing:** modify specific attributes (text-driven)
- **Stylization:** transfer motion style across characters`
      }
    ]
  }
];

function TopicCard({ topic, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: isActive ? topic.accent : "white",
        color: isActive ? "white" : "#1e293b",
        border: `2px solid ${isActive ? topic.accent : "#e2e8f0"}`,
        borderRadius: "10px",
        padding: "10px 14px",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "'Georgia', serif",
        fontSize: "13px",
        fontWeight: isActive ? "700" : "500",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        width: "100%",
        transition: "all 0.18s",
        boxShadow: isActive ? `0 4px 12px ${topic.accent}40` : "none",
      }}
    >
      <span style={{ fontSize: "16px" }}>{topic.icon}</span>
      <span style={{ lineHeight: 1.3 }}>{topic.label}</span>
    </button>
  );
}

function renderContent(text) {
  // Simple markdown-like renderer
  const lines = text.split("\n");
  const elements = [];
  let inTable = false;
  let tableRows = [];
  let inCode = false;
  let codeLines = [];
  let i = 0;

  const imageMap = {
    transform1: transformA,
    transform2: transformB,
    fk1: fk1,
    fk2: fk2,
    fk3: fk3,
    fk4: fk4,
    ik1: ik1,
    ik2: ik2,
    ik3: ik3,
    ik4: ik4,
    ik5: ik5,
    ik6: ik6,
    ik7: ik7,
    ik8: ik8,
    ik9: ik9,
    to1: to1,
    to2: to2,
    to3: to3,
    to4: to4,
    to5: to5,
    to6: to6,
    to7: to7,
    to8: to8,
    to9: to9,
    to10: to10,
    to11: to11,
    to12: to12,
    to13: to13,
    to14: to14,
    to15: to15,
    to16: to16,
    to17: to17
  };

  const flushTable = () => {
    if (tableRows.length < 2) return;
    const header = tableRows[0].split("|").filter(c => c.trim());
    const body = tableRows.slice(2);
    elements.push(
      <div key={`table-${i}`} style={{ overflowX: "auto", margin: "12px 0" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "13px" }}>
          <thead>
            <tr>{header.map((h, hi) => (
              <th key={hi} style={{ background: "#f1f5f9", padding: "6px 12px", border: "1px solid #cbd5e1", textAlign: "left", fontFamily: "Georgia, serif" }}>{h.trim()}</th>
            ))}</tr>
          </thead>
          <tbody>
            {body.map((row, ri) => {
              const cells = row.split("|").filter(c => c.trim());
              return (
                <tr key={ri} style={{ background: ri % 2 === 0 ? "white" : "#f8fafc" }}>
                  {cells.map((c, ci) => (
                    <td key={ci} style={{ padding: "5px 12px", border: "1px solid #e2e8f0", verticalAlign: "top" }}>{renderInline(c.trim())}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
    tableRows = [];
    inTable = false;
  };

  const flushCode = () => {
    elements.push(
      <pre key={`code-${i}`} style={{ background: "#1e293b", color: "#e2e8f0", borderRadius: "8px", padding: "12px 16px", fontSize: "12px", overflowX: "auto", margin: "10px 0", fontFamily: "monospace", lineHeight: 1.6 }}>
        {codeLines.join("\n")}
      </pre>
    );
    codeLines = [];
    inCode = false;
  };

  while (i < lines.length) {
    const line = lines[i];

    // image line handling: lines like "![transform1]" or "![transform2]"
    const imgMatch = line.trim().match(/^!\[(.+?)\]\s*$/);
    if (imgMatch) {
      const key = imgMatch[1];
      const src = imageMap[key];
      if (src) {
        elements.push(
          <div key={`img-${i}`} style={{ textAlign: "center", margin: "12px 0" }}>
            <img src={src} alt={key} style={{ maxWidth: "100%", borderRadius: "8px", border: "1px solid #e2e8f0" }} />
          </div>
        );
        i++; continue;
      }
    }

    if (line.startsWith("```")) {
      if (inCode) { flushCode(); }
      else { inCode = true; }
      i++; continue;
    }
    if (inCode) { codeLines.push(line); i++; continue; }

    if (line.startsWith("|")) {
      inTable = true;
      tableRows.push(line);
      i++; continue;
    }
    if (inTable) { flushTable(); }

    if (!line.trim()) { elements.push(<div key={i} style={{ height: "8px" }} />); i++; continue; }

    if (line.startsWith("## ")) {
      elements.push(<h4 key={i} style={{ margin: "14px 0 6px", color: "#334155", fontFamily: "Georgia, serif", fontSize: "15px" }}>{line.slice(3)}</h4>);
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} style={{ borderLeft: "3px solid #94a3b8", paddingLeft: "12px", margin: "8px 0", color: "#475569", fontStyle: "italic", fontSize: "13px", fontFamily: "monospace" }}>
          {renderInline(line.slice(2))}
        </blockquote>
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      elements.push(
        <div key={i} style={{ display: "flex", gap: "8px", margin: "3px 0", fontSize: "14px" }}>
          <span style={{ color: "#94a3b8", flexShrink: 0, marginTop: "2px" }}>▸</span>
          <span>{renderInline(line.slice(2))}</span>
        </div>
      );
    } else if (/^\d+\. /.test(line)) {
      const num = line.match(/^(\d+)\. /)[1];
      elements.push(
        <div key={i} style={{ display: "flex", gap: "8px", margin: "3px 0", fontSize: "14px" }}>
          <span style={{ color: "#94a3b8", flexShrink: 0, fontWeight: "bold", minWidth: "20px" }}>{num}.</span>
          <span>{renderInline(line.replace(/^\d+\. /, ""))}</span>
        </div>
      );
    } else {
      elements.push(<p key={i} style={{ margin: "5px 0", fontSize: "14px", lineHeight: 1.7 }}>{renderInline(line)}</p>);
    }
    i++;
  }
  if (inTable) flushTable();
  if (inCode) flushCode();
  return elements;
}

function renderInline(text) {
  const parts = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    const codeMatch = remaining.match(/`([^`]+)`/);

    let firstMatch = null;
    let matchType = null;

    if (boldMatch && (!codeMatch || boldMatch.index <= codeMatch.index)) {
      firstMatch = boldMatch;
      matchType = "bold";
    } else if (codeMatch) {
      firstMatch = codeMatch;
      matchType = "code";
    }

    if (!firstMatch) {
      parts.push(<span key={key++}>{remaining}</span>);
      break;
    }

    if (firstMatch.index > 0) {
      parts.push(<span key={key++}>{remaining.slice(0, firstMatch.index)}</span>);
    }

    if (matchType === "bold") {
      parts.push(<strong key={key++} style={{ color: "#1e293b" }}>{firstMatch[1]}</strong>);
    } else {
      parts.push(<code key={key++} style={{ background: "#f1f5f9", padding: "1px 5px", borderRadius: "3px", fontFamily: "monospace", fontSize: "12px", color: "#be123c" }}>{firstMatch[1]}</code>);
    }

    remaining = remaining.slice(firstMatch.index + firstMatch[0].length);
  }
  return parts.length === 1 ? parts[0] : parts;
}

export default function StudyGuide() {
  const [activeId, setActiveId] = useState("l01");
  const [openSection, setOpenSection] = useState(null);

  const topic = topics.find(t => t.id === activeId);

  return (
    <div style={{
      fontFamily: "Georgia, 'Times New Roman', serif",
      background: "#f8fafc",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
        color: "white",
        padding: "20px 24px 16px",
        borderBottom: "3px solid #2563eb",
      }}>
        <div style={{ fontSize: "22px", fontWeight: "800", letterSpacing: "0.5px", marginBottom: "4px" }}>
          📚 Computational Models of Motion
        </div>
        <div style={{ fontSize: "13px", color: "#94a3b8", letterSpacing: "1px", textTransform: "uppercase" }}>
          263-5807-00L · Complete Exam Study Guide · 10 Lectures
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <div style={{
          width: "240px",
          minWidth: "240px",
          background: "white",
          borderRight: "1px solid #e2e8f0",
          overflowY: "auto",
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}>
          <div style={{ fontSize: "10px", color: "#94a3b8", fontFamily: "sans-serif", letterSpacing: "1px", textTransform: "uppercase", padding: "4px 4px 8px", borderBottom: "1px solid #f1f5f9", marginBottom: "4px" }}>
            Topics
          </div>
          {topics.map(t => (
            <TopicCard
              key={t.id}
              topic={t}
              isActive={t.id === activeId}
              onClick={() => { setActiveId(t.id); setOpenSection(null); }}
            />
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, overflowY: "auto", padding: "24px", background: "#f8fafc" }}>
          {topic && (
            <div style={{ maxWidth: "860px" }}>
              {/* Topic header */}
              <div style={{
                background: "white",
                border: `2px solid ${topic.accent}`,
                borderRadius: "12px",
                padding: "18px 22px",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
                boxShadow: `0 4px 20px ${topic.accent}20`,
              }}>
                <span style={{ fontSize: "32px" }}>{topic.icon}</span>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a" }}>{topic.label}</div>
                  <div style={{ fontSize: "12px", color: "#64748b", marginTop: "2px", fontFamily: "sans-serif" }}>
                    {topic.sections.length} sections · Click to expand
                  </div>
                </div>
              </div>

              {/* Sections */}
              {topic.sections.map((section, idx) => {
                const isOpen = openSection === idx;
                return (
                  <div key={idx} style={{
                    background: "white",
                    borderRadius: "10px",
                    marginBottom: "10px",
                    border: `1px solid ${isOpen ? topic.accent : "#e2e8f0"}`,
                    boxShadow: isOpen ? `0 4px 16px ${topic.accent}18` : "none",
                    transition: "all 0.2s",
                    overflow: "hidden",
                  }}>
                    <button
                      onClick={() => setOpenSection(isOpen ? null : idx)}
                      style={{
                        background: isOpen ? topic.color : "white",
                        border: "none",
                        width: "100%",
                        padding: "14px 18px",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontFamily: "Georgia, serif",
                        fontSize: "15px",
                        fontWeight: "700",
                        color: isOpen ? topic.accent : "#1e293b",
                        textAlign: "left",
                        transition: "all 0.18s",
                      }}
                    >
                      <span>{section.title}</span>
                      <span style={{
                        fontSize: "18px",
                        transform: isOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                        color: topic.accent,
                        marginLeft: "8px",
                        flexShrink: 0,
                      }}>▼</span>
                    </button>

                    {isOpen && (
                      <div style={{
                        padding: "6px 20px 18px",
                        color: "#334155",
                        borderTop: `1px solid ${topic.accent}30`,
                        lineHeight: 1.7,
                      }}>
                        {renderContent(section.content)}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Quick summary footer */}
              <div style={{
                background: "linear-gradient(135deg, #0f172a, #1e3a5f)",
                color: "#94a3b8",
                borderRadius: "10px",
                padding: "14px 18px",
                fontSize: "12px",
                fontFamily: "sans-serif",
                marginTop: "8px",
                lineHeight: 1.7,
              }}>
                <span style={{ color: "#60a5fa", fontWeight: "bold" }}>💡 Exam tip:</span> The written test covers concepts from all lectures with multiple-choice and short-answer questions. Focus on understanding the key formulas, algorithmic steps, and the motivation for each method — not just names.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
