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
import to1 from "./assets/trajectoryoptimization1.png";
import to2 from "./assets/trajectoryoptimization2.png";
import to3 from "./assets/trajectoryoptimization3.png";
import to4 from "./assets/trajectoryoptimization4.png";
import to5 from "./assets/trajectoryoptimization5.png";
import to6 from "./assets/trajectoryoptimization6.png";
import to7 from "./assets/trajectoryoptimization7.png";
import to8 from "./assets/trajectoryoptimization8.png";
import to9 from "./assets/trajectoryoptimization9.png";
import to10 from "./assets/trajectoryoptimization10.png";
import to11 from "./assets/trajectoryoptimization11.png";
import to12 from "./assets/trajectoryoptimization12.png";
import to13 from "./assets/trajectoryoptimization13.png";
import to14 from "./assets/trajectoryoptimization14.png";
import to15 from "./assets/trajectoryoptimization15.png";
import to16 from "./assets/trajectoryoptimization16.png";
import to17 from "./assets/trajectoryoptimization17.png";
import TO1 from "./assets/T01.png";
import TO2 from "./assets/TO2.png";
import TO3 from "./assets/T03.png";
import TO4 from "./assets/TO4.png";
import TO5 from "./assets/TO5.png";
import TO6 from "./assets/TO6.png";
import TO7 from "./assets/TO7.png";
import TO8 from "./assets/TO8.png";
import TO9 from "./assets/TO9.png";
import TO10 from "./assets/TO10.png";
import TO11 from "./assets/TO11.png";
import TO12 from "./assets/TO12.png";
import TO13 from "./assets/TO13.png";
import TO14 from "./assets/TO14.png";
import TO15 from "./assets/TO15.png";
import TO16 from "./assets/TO16.png";
import TO17 from "./assets/TO17.png";
import TO18 from "./assets/TO18.png";
import TO19 from "./assets/TO19.png";
import TO20 from "./assets/TO20.png";
import TO21 from "./assets/TO21.png";
import PRM1 from "./assets/PRM1.png";
import PRM2 from "./assets/PRM2.png";
import PRM3 from "./assets/PRM3.png";
import PRM4 from "./assets/PRM4.png";
import PRM5 from "./assets/PRM5.png";
import PRM6 from "./assets/PRM6.png";
import PRM7 from "./assets/PRM7.png";
import PRM8 from "./assets/PRM8.png";
import PRM9 from "./assets/PRM9.png";
import PRM10 from "./assets/PRM10.png";
import PRM11 from "./assets/PRM11.png";
import PRM12 from "./assets/PRM12.png";
import PRM13 from "./assets/PRM13.png";
import PRM14 from "./assets/PRM14.png";
import c1 from "./assets/c1.png";
import c2 from "./assets/c2.png";
import c3 from "./assets/c3.png";
import c4 from "./assets/c4.png";
import c5 from "./assets/c5.png";
import c6 from "./assets/c6.png";
import c7 from "./assets/c7.png";
import c8 from "./assets/c8.png";
import RL1 from "./assets/RL1.png";
import RL2 from "./assets/RL2.png";
import RL3 from "./assets/RL3.png";
import RL4 from "./assets/RL4.png";
import RL5 from "./assets/RL5.png";
import RL6 from "./assets/RL6.png";
import RL7 from "./assets/RL7.png";
import RL8 from "./assets/RL8.png";
import RL9 from "./assets/RL9.png";
import RL10 from "./assets/RL10.png";
import RL11 from "./assets/RL11.png";
import RL12 from "./assets/RL12.png";
import RL13 from "./assets/RL13.png";
import RL14 from "./assets/RL14.png";
import RL15 from "./assets/RL15.png";
import RL16 from "./assets/RL16.png";
import RL17 from "./assets/RL17.png";
import RL18 from "./assets/RL18.png";
import RL19 from "./assets/RL19.png";
import RL20 from "./assets/RL20.png";
import RL21 from "./assets/RL21.png";
import RL22 from "./assets/RL22.png";
import RL23 from "./assets/RL23.png";
import RL24 from "./assets/RL24.png";
import RL25 from "./assets/RL25.png";
import RL26 from "./assets/RL26.png";
import RL27 from "./assets/RL27.png";
import RL28 from "./assets/RL28.png";
import RL29 from "./assets/RL29.png";
import RL30 from "./assets/RL30.png";
import RL31 from "./assets/RL31.png";
import RL32 from "./assets/RL32.png";
import RL33 from "./assets/RL33.png";
import RL34 from "./assets/RL34.png";
import RL35 from "./assets/RL35.png";
import RL36 from "./assets/RL36.png";
import RL37 from "./assets/RL37.png";
import RL38 from "./assets/RL38.png";
import RL39 from "./assets/RL39.png";
import RL40 from "./assets/RL40.png";
import RL41 from "./assets/RL41.png";
import RL42 from "./assets/RL42.png";
import RL43 from "./assets/RL43.png";
import RL44 from "./assets/RL44.png";
import RL45 from "./assets/RL45.png";
import RL46 from "./assets/RL46.png";
import RL47 from "./assets/RL47.png";
import RL48 from "./assets/RL48.png";
import RL49 from "./assets/RL49.png";
import RL50 from "./assets/RL50.png";
import RL51 from "./assets/RL51.png";
import RL52 from "./assets/RL52.png";
import TRL1 from "./assets/2_RL1.png";
import TRL2 from "./assets/2_RL2.png";
import TRL3 from "./assets/2_RL3.png";
import TRL4 from "./assets/2_RL4.png";
import TRL5 from "./assets/2_RL5.png";
import TRL6 from "./assets/2_RL6.png";
import TRL7 from "./assets/2_RL7.png";
import TRL8 from "./assets/2_RL8.png";
import TRL9 from "./assets/2_RL9.png";
import TRL10 from "./assets/2_RL10.png";
import TRL11 from "./assets/2_RL11.png";
import TRL12 from "./assets/2_RL12.png";
import TRL13 from "./assets/2_RL13.png";
import TRL14 from "./assets/2_RL14.png";
import TRL15 from "./assets/2_RL15.png";
import TRL16 from "./assets/2_RL16.png";
import TRL17 from "./assets/2_RL17.png";
import TRL18 from "./assets/2_RL18.png";
import TRL19 from "./assets/2_RL19.png";
import _3_RL1 from "./assets/3_RL1.png";
import _3_RL2 from "./assets/3_RL2.png";
import _3_RL3 from "./assets/3_RL3.png";
import _3_RL4 from "./assets/3_RL4.png";
import _3_RL5 from "./assets/3_RL5.png";
import _3_RL6 from "./assets/3_RL6.png";
import _3_RL7 from "./assets/3_RL7.png";
import _3_RL8 from "./assets/3_RL8.png";
import _3_RL9 from "./assets/3_RL9.png";
import _3_RL10 from "./assets/3_RL10.png";
import _3_RL11 from "./assets/3_RL11.png";
import _3_RL12 from "./assets/3_RL12.png";
import _3_RL13 from "./assets/3_RL13.png";
import _3_RL14 from "./assets/3_RL14.png";
import _3_RL15 from "./assets/3_RL15.png";
import _3_RL16 from "./assets/3_RL16.png";
import _3_RL17 from "./assets/3_RL17.png";
import _3_RL18 from "./assets/3_RL18.png";
import _3_RL19 from "./assets/3_RL19.png";
import _3_RL20 from "./assets/3_RL20.png";
import _3_RL21 from "./assets/3_RL21.png";
import _3_RL22 from "./assets/3_RL22.png";
import _3_RL23 from "./assets/3_RL23.png";
import _3_RL24 from "./assets/3_RL24.png";
import _3_RL25 from "./assets/3_RL25.png";
import _3_RL26 from "./assets/3_RL26.png";
import _3_RL27 from "./assets/3_RL27.png";
import _3_RL28 from "./assets/3_RL28.png";
import _3_RL29 from "./assets/3_RL29.png";
import _3_RL30 from "./assets/3_RL30.png";
import _3_RL31 from "./assets/3_RL31.png";
import _3_RL32 from "./assets/3_RL32.png";
import _3_RL33 from "./assets/3_RL33.png";
import _3_RL34 from "./assets/3_RL34.png";
import _3_RL35 from "./assets/3_RL35.png";
import _3_RL36 from "./assets/3_RL36.png";
import _3_RL37 from "./assets/3_RL37.png";
import _3_RL38 from "./assets/3_RL38.png";
import _3_RL39 from "./assets/3_RL39.png";
import _3_RL40 from "./assets/3_RL40.png";
import _3_RL41 from "./assets/3_RL41.png";
import _3_RL42 from "./assets/3_RL42.png";
import _3_RL43 from "./assets/3_RL43.png";
import _3_RL44 from "./assets/3_RL44.png";
import _3_RL45 from "./assets/3_RL45.png";
import _3_RL46 from "./assets/3_RL46.png";
import _3_RL47 from "./assets/3_RL47.png";
import _3_RL48 from "./assets/3_RL48.png";
import _3_RL49 from "./assets/3_RL49.png";
import _3_RL50 from "./assets/3_RL50.png";
import _3_RL51 from "./assets/3_RL51.png";
import _3_RL52 from "./assets/3_RL52.png";
import _3_RL53 from "./assets/3_RL53.png";
import _3_RL54 from "./assets/3_RL54.png";
import MM1 from "./assets/motionmanifold1.png";
import MM2 from "./assets/motionmanifold2.png";
import MM3 from "./assets/motionmanifold3.png";
import MM4 from "./assets/motionmanifold4.png";
import MM5 from "./assets/motionmanifold5.png";
import MM6 from "./assets/motionmanifold6.png";
import MM7 from "./assets/motionmanifold7.png";
import MM8 from "./assets/motionmanifold8.png";
import MM9 from "./assets/motionmanifold9.png";
import MM10 from "./assets/motionmanifold10.png";
import MM11 from "./assets/motionmanifold11.png";
import MM12 from "./assets/motionmanifold12.png";
import MM13 from "./assets/motionmanifold13.png";
import MM14 from "./assets/motionmanifold14.png";
import MM15 from "./assets/motionmanifold15.png";
import MM16 from "./assets/motionmanifold16.png";
import MM17 from "./assets/motionmanifold17.png";
import MM18 from "./assets/motionmanifold18.png";
import MM19 from "./assets/motionmanifold19.png";
import MM20 from "./assets/motionmanifold20.png";
import MM21 from "./assets/motionmanifold21.png";
import MM22 from "./assets/motionmanifold22.png";
import MM23 from "./assets/motionmanifold23.png";
import MM24 from "./assets/motionmanifold24.png";
import MM25 from "./assets/motionmanifold25.png";
import MM26 from "./assets/motionmanifold26.png";
import MM27 from "./assets/motionmanifold27.png";
import GM1 from "./assets/generativemotion1.png";
import GM2 from "./assets/generativemotion2.png";
import GM3 from "./assets/generativemotion3.png";
import GM4 from "./assets/generativemotion4.png";
import GM5 from "./assets/generativemotion5.png";
import GM6 from "./assets/generativemotion6.png";
import GM7 from "./assets/generativemotion7.png";
import GM8 from "./assets/generativemotion8.png";
import GM9 from "./assets/generativemotion9.png";
import GM10 from "./assets/generativemotion10.png";
import GM11 from "./assets/generativemotion11.png";
import GM12 from "./assets/generativemotion12.png";
import GM13 from "./assets/generativemotion13.png";
import GM14 from "./assets/generativemotion14.png";
import GM15 from "./assets/generativemotion15.png";
import GM16 from "./assets/generativemotion16.png";
import GM17 from "./assets/generativemotion17.png";
import GM18 from "./assets/generativemotion18.png";
import GM19 from "./assets/generativemotion19.png";
import GM20 from "./assets/generativemotion20.png";
import GM21 from "./assets/generativemotion21.png";
import GM22 from "./assets/generativemotion22.png";
import GM23 from "./assets/generativemotion23.png";
import GM24 from "./assets/generativemotion24.png";
import GM25 from "./assets/generativemotion25.png";
import GM26 from "./assets/generativemotion26.png";
import GM27 from "./assets/generativemotion27.png";
import GM28 from "./assets/generativemotion28.png";
import GM29 from "./assets/generativemotion29.png";
import GM30 from "./assets/generativemotion30.png";
import GM31 from "./assets/generativemotion31.png";
import GM32 from "./assets/generativemotion32.png";
import GM33 from "./assets/generativemotion33.png";
import GM34 from "./assets/generativemotion34.png";
import GM35 from "./assets/generativemotion35.png";
import GM36 from "./assets/generativemotion36.png";
import GM37 from "./assets/generativemotion37.png";
import GM38 from "./assets/generativemotion38.png";
import GM39 from "./assets/generativemotion39.png";
import GM40 from "./assets/generativemotion40.png";
import GM41 from "./assets/generativemotion41.png";
import GM42 from "./assets/generativemotion42.png";
import GM43 from "./assets/generativemotion43.png";
import GM44 from "./assets/generativemotion44.png";
import GM45 from "./assets/generativemotion45.png";
import GM46 from "./assets/generativemotion46.png";
import GM47 from "./assets/generativemotion47.png";
import GM48 from "./assets/generativemotion48.png";
import GM49 from "./assets/generativemotion49.png";
import GM50 from "./assets/generativemotion50.png";
import GM51 from "./assets/generativemotion51.png";
import GM52 from "./assets/generativemotion52.png";
import GM53 from "./assets/generativemotion53.png";
import GM54 from "./assets/generativemotion54.png";
import GM55 from "./assets/generativemotion55.png";
import GM56 from "./assets/generativemotion56.png";
import GM57 from "./assets/generativemotion57.png";
import GM58 from "./assets/generativemotion58.png";
import GM59 from "./assets/generativemotion59.png";
import GM60 from "./assets/generativemotion60.png";
import GM61 from "./assets/generativemotion61.png";
import GM62 from "./assets/generativemotion62.png";
import GM63 from "./assets/generativemotion63.png";
import GM64 from "./assets/generativemotion64.png";
import GM65 from "./assets/generativemotion65.png";
import GM66 from "./assets/generativemotion66.png";
import GM67 from "./assets/generativemotion67.png";
import GM68 from "./assets/generativemotion68.png";
import GM69 from "./assets/generativemotion69.png";
import GM70 from "./assets/generativemotion70.png";
import GM71 from "./assets/generativemotion71.png";
import GM72 from "./assets/generativemotion72.png";
import GM73 from "./assets/generativemotion73.png";
import GM74 from "./assets/generativemotion74.png";
import GM75 from "./assets/generativemotion75.png";
import GM76 from "./assets/generativemotion76.png";
import GM77 from "./assets/generativemotion77.png";
import GM78 from "./assets/generativemotion78.png";
import GM79 from "./assets/generativemotion79.png";
import GM80 from "./assets/generativemotion80.png";
import GM81 from "./assets/generativemotion81.png";
import GM82 from "./assets/generativemotion82.png";
import GM83 from "./assets/generativemotion83.png";
import GM84 from "./assets/generativemotion84.png";
import GM85 from "./assets/generativemotion85.png";
import GM86 from "./assets/generativemotion86.png";
import GM87 from "./assets/generativemotion87.png";
import GM88 from "./assets/generativemotion88.png";
import GM89 from "./assets/generativemotion89.png";
import GM90 from "./assets/generativemotion90.png";
import GM91 from "./assets/generativemotion91.png";
import GM92 from "./assets/generativemotion92.png";
import GM93 from "./assets/generativemotion93.png";
import GM94 from "./assets/generativemotion94.png";
import GM95 from "./assets/generativemotion95.png";
import GM96 from "./assets/generativemotion96.png";
import GM97 from "./assets/generativemotion97.png";
import GM98 from "./assets/generativemotion98.png";
import GM99 from "./assets/generativemotion99.png";
import GM100 from "./assets/generativemotion100.png";
import GM101 from "./assets/generativemotion101.png";
import GM102 from "./assets/generativemotion102.png";
import GM103 from "./assets/generativemotion103.png";
import GM104 from "./assets/generativemotion104.png";
import GM105 from "./assets/generativemotion105.png";
import GM106 from "./assets/generativemotion106.png";
import GM107 from "./assets/generativemotion107.png";
import GM108 from "./assets/generativemotion108.png";
import GM109 from "./assets/generativemotion109.png";
import GM110 from "./assets/generativemotion110.png";
import GM111 from "./assets/generativemotion111.png";
import GM112 from "./assets/generativemotion112.png";

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

![to17]

![TO1]

![TO2]

![TO3]

![TO4]

![TO5]

![TO6]

![TO7]

![TO8]

![TO9]

![TO10]  

![TO11]

![TO12]

![TO13]

![TO14]

![TO15]

![TO16]

![TO17]

![TO18]

![TO19]

![TO20]

![TO21]`
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
        content: `**Core idea:** build a graph of collision-free configurations in configuration space (C-space), then search that graph when a query arrives.

**Why a metric matters:** sampling-based planners need a notion of closeness between configurations.
- For Euclidean variables, use the Euclidean norm.
- For mixed variables, use a weighted Lp norm.
- For orientations, use geodesic distance on SO(3) rather than raw angle differences.

> Nearest(G = (V, E), x) := argmin_{v in V} ||x - v||

**Local planning:** connect two nearby configurations by interpolating between them and checking whether the connection is collision free.

**Two-phase algorithm:**
1. **Offline roadmap construction**
   - Sample random configurations in C-space
   - Collision-check each sample
   - Connect nearby samples with a local planner
   - Store a graph of feasible motions
2. **Online search**
   - Connect the start and goal to the roadmap
   - Run graph search such as A* or weighted A*

**PRM*:** use a connection radius of the form r(n) = gamma_PRM(log n / n)^(1/d) for near-neighbor queries.
- This gives asymptotic optimality.
- Lazy PRM defers edge collision checking until query time.

**Takeaway:** PRM is a multi-query planner, so the upfront roadmap cost is useful when many queries will reuse the same environment.

## Images
![PRM1]

![PRM2]

![PRM3]

![PRM4]

![PRM5]

![PRM6]

![PRM7]

![PRM8]

![PRM9]

![PRM10]

![PRM11]

![PRM12]

![PRM13]

![PRM14]`
      },
      {
        title: "Rapidly-Exploring Random Tree (RRT)",
        content: `**Motivation:** PRM is a multi-query algorithm, but many problems are single-query.

**Basic RRT:**
1. Sample a random configuration q_rand
2. Find the nearest node q_near in the current tree
3. Steer from q_near toward q_rand with a step size
4. If the edge is collision free, add the new node and edge

**RRT*:** same basic growth rule, but after adding a node:
- Search nearby nodes within a radius
- Choose the best parent with the lowest cost
- Rewire nearby branches if the new node gives a cheaper path

**RRT-Connect:** grow two trees, one from the start and one from the goal, and try to connect them at every extension step.

**Properties:**
- Probabilistic completeness: the chance of finding a feasible path approaches 1 as samples increase
- Asymptotic optimality: RRT* improves toward the optimal cost as samples increase

**Postprocessing:** initial RRT paths are usually jagged, so random shortcutting or trajectory optimization is used to smooth them.

**Practical summary:** RRT is usually the better fit for single-query planning and narrow, hard-to-explore spaces.`
      },
      {
        title: "Sampling-Based Planning: Properties & Limitations",
        content: `**Theoretical guarantees:**
- Probabilistic completeness: if a feasible path exists, the planner finds it with probability approaching 1 as the number of samples grows
- Asymptotic optimality: the solution cost approaches the optimum as samples go to infinity

**Common limitations:**
- Narrow passages require low-probability samples
- Constrained systems can make collision-free sampling hard
- Kinodynamic and nonholonomic systems cannot be planned purely geometrically

**Kinodynamic planning:** extend the state space to include velocity and acceleration, then plan rollouts of actions directly instead of simple geometric interpolation.

**Active research directions:**
- Faster planners through parallelization and better use of compute
- Learning-assisted planning
- Multi-robot and multi-goal planning
- Integrated task and motion planning`
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

**Model Predictive Control (MPC):** Solve a short-horizon trajectory optimization at each time step, execute first action, re-solve. Combines planning and feedback.

## Control Slides
![c1]

![c2]

![c3]

![c4]

![c5]

![c6]

![c7]

![c8]`
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

**Limitation:** Both need full state sweep and transition model → only for small, discrete toy problems.

## Slides

![RL1]

![RL2]

![RL3]

![RL4]

![RL5]

![RL6]

![RL7]

![RL8]

![RL9]

![RL10]

![RL11]

![RL12]

![RL13]

![RL14]

![RL15]

![RL16]

![RL17]

![RL18]

![RL19]

![RL20]

![RL21]

![RL22]

![RL23]

![RL24]

![RL25]

![RL26]

![RL27]

![RL28]

![RL29]

![RL30]

![RL31]

![RL32]

![RL33]

![RL34]

![RL35]

![RL36]

![RL37]

![RL38]

![RL39]

![RL40]

![RL41]

![RL42]

![RL43]

![RL44]

![RL45]

![RL46]

![RL47]

![RL48]

![RL49]

![RL50]

![RL51]

![RL52]`
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
      },
      {
        title: "Lecture Slides",
        content: `## Images
![TRL1]

![TRL2]

![TRL3]

![TRL4]

![TRL5]

![TRL6]

![TRL7]

![TRL8]

![TRL9]

![TRL10]

![TRL11]

![TRL12]

![TRL13]

![TRL14]

![TRL15]

![TRL16]

![TRL17]

![TRL18]

![TRL19]`
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
      },
      {
        title: "Lecture Slides",
        content: `## Images
![3_RL1]

![3_RL2]

![3_RL3]

![3_RL4]

![3_RL5]

![3_RL6]

![3_RL7]

![3_RL8]

![3_RL9]

![3_RL10]

![3_RL11]

![3_RL12]

![3_RL13]

![3_RL14]

![3_RL15]

![3_RL16]

![3_RL17]

![3_RL18]

![3_RL19]

![3_RL20]

![3_RL21]

![3_RL22]

![3_RL23]

![3_RL24]

![3_RL25]

![3_RL26]

![3_RL27]

![3_RL28]

![3_RL29]

![3_RL30]

![3_RL31]

![3_RL32]

![3_RL33]

![3_RL34]

![3_RL35]

![3_RL36]

![3_RL37]

![3_RL38]

![3_RL39]

![3_RL40]

![3_RL41]

![3_RL42]

![3_RL43]

![3_RL44]

![3_RL45]

![3_RL46]

![3_RL47]

![3_RL48]

![3_RL49]

![3_RL50]

![3_RL51]

![3_RL52]

![3_RL53]

![3_RL54]`
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
      },
      {
        title: "Lecture Slides",
        content: `## Images
![MM1]

![MM2]

![MM3]

![MM4]

![MM5]

![MM6]

![MM7]

![MM8]

![MM9]

![MM10]

![MM11]

![MM12]

![MM13]

![MM14]

![MM15]

![MM16]

![MM17]

![MM18]

![MM19]

![MM20]

![MM21]

![MM22]

![MM23]

![MM24]

![MM25]

![MM26]

![MM27]`
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
      },
      {
        title: "Lecture Slides",
        content: `## Images
![GM1]

![GM2]

![GM3]

![GM4]

![GM5]

![GM6]

![GM7]

![GM8]

![GM9]

![GM10]

![GM11]

![GM12]

![GM13]

![GM14]

![GM15]

![GM16]

![GM17]

![GM18]

![GM19]

![GM20]

![GM21]

![GM22]

![GM23]

![GM24]

![GM25]

![GM26]

![GM27]

![GM28]

![GM29]

![GM30]

![GM31]

![GM32]

![GM33]

![GM34]

![GM35]

![GM36]

![GM37]

![GM38]

![GM39]

![GM40]

![GM41]

![GM42]

![GM43]

![GM44]

![GM45]

![GM46]

![GM47]

![GM48]

![GM49]

![GM50]

![GM51]

![GM52]

![GM53]

![GM54]

![GM55]

![GM56]

![GM57]

![GM58]

![GM59]

![GM60]

![GM61]

![GM62]

![GM63]

![GM64]

![GM65]

![GM66]

![GM67]

![GM68]

![GM69]

![GM70]

![GM71]

![GM72]

![GM73]

![GM74]

![GM75]

![GM76]

![GM77]

![GM78]

![GM79]

![GM80]

![GM81]

![GM82]

![GM83]

![GM84]

![GM85]

![GM86]

![GM87]

![GM88]

![GM89]

![GM90]

![GM91]

![GM92]

![GM93]

![GM94]

![GM95]

![GM96]

![GM97]

![GM98]

![GM99]

![GM100]

![GM101]

![GM102]

![GM103]

![GM104]

![GM105]

![GM106]

![GM107]

![GM108]

![GM109]

![GM110]

![GM111]

![GM112]`
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
    to17: to17,
    TO1: TO1, TO2: TO2, TO3: TO3, TO4: TO4, TO5: TO5,
    TO6: TO6, TO7: TO7, TO8: TO8, TO9: TO9, TO10: TO10,
    TO11: TO11, TO12: TO12, TO13: TO13, TO14: TO14, TO15: TO15,
    TO16: TO16, TO17: TO17, TO18: TO18, TO19: TO19, TO20: TO20,
    TO21: TO21,
    PRM1: PRM1,
    PRM2: PRM2,
    PRM3: PRM3,
    PRM4: PRM4,
    PRM5: PRM5,
    PRM6: PRM6,
    PRM7: PRM7,
    PRM8: PRM8,
    PRM9: PRM9,
    PRM10: PRM10,
    PRM11: PRM11,
    PRM12: PRM12,
    PRM13: PRM13,
    PRM14: PRM14,
    c1: c1,
    c2: c2,
    c3: c3,
    c4: c4,
    c5: c5,
    c6: c6,
    c7: c7,
    c8: c8,
    RL1: RL1, RL2: RL2, RL3: RL3, RL4: RL4, RL5: RL5,
    RL6: RL6, RL7: RL7, RL8: RL8, RL9: RL9, RL10: RL10,
    RL11: RL11, RL12: RL12, RL13: RL13, RL14: RL14, RL15: RL15,
    RL16: RL16, RL17: RL17, RL18: RL18, RL19: RL19, RL20: RL20,
    RL21: RL21, RL22: RL22, RL23: RL23, RL24: RL24, RL25: RL25,
    RL26: RL26, RL27: RL27, RL28: RL28, RL29: RL29, RL30: RL30,
    RL31: RL31, RL32: RL32, RL33: RL33, RL34: RL34, RL35: RL35,
    RL36: RL36, RL37: RL37, RL38: RL38, RL39: RL39, RL40: RL40,
    RL41: RL41, RL42: RL42, RL43: RL43, RL44: RL44, RL45: RL45,
    RL46: RL46, RL47: RL47, RL48: RL48, RL49: RL49, RL50: RL50,
    RL51: RL51, RL52: RL52,
    TRL1: TRL1, TRL2: TRL2, TRL3: TRL3, TRL4: TRL4, TRL5: TRL5,
    TRL6: TRL6, TRL7: TRL7, TRL8: TRL8, TRL9: TRL9, TRL10: TRL10,
    TRL11: TRL11, TRL12: TRL12, TRL13: TRL13, TRL14: TRL14, TRL15: TRL15,
    TRL16: TRL16, TRL17: TRL17, TRL18: TRL18, TRL19: TRL19,"3_RL1": _3_RL1, "3_RL2": _3_RL2, "3_RL3": _3_RL3, "3_RL4": _3_RL4, "3_RL5": _3_RL5,
    "3_RL6": _3_RL6, "3_RL7": _3_RL7, "3_RL8": _3_RL8, "3_RL9": _3_RL9, "3_RL10": _3_RL10,
    "3_RL11": _3_RL11, "3_RL12": _3_RL12, "3_RL13": _3_RL13, "3_RL14": _3_RL14, "3_RL15": _3_RL15,
    "3_RL16": _3_RL16, "3_RL17": _3_RL17, "3_RL18": _3_RL18, "3_RL19": _3_RL19, "3_RL20": _3_RL20,
    "3_RL21": _3_RL21, "3_RL22": _3_RL22, "3_RL23": _3_RL23, "3_RL24": _3_RL24, "3_RL25": _3_RL25,
    "3_RL26": _3_RL26, "3_RL27": _3_RL27, "3_RL28": _3_RL28, "3_RL29": _3_RL29, "3_RL30": _3_RL30,
    "3_RL31": _3_RL31, "3_RL32": _3_RL32, "3_RL33": _3_RL33, "3_RL34": _3_RL34, "3_RL35": _3_RL35,
    "3_RL36": _3_RL36, "3_RL37": _3_RL37, "3_RL38": _3_RL38, "3_RL39": _3_RL39, "3_RL40": _3_RL40,
    "3_RL41": _3_RL41, "3_RL42": _3_RL42, "3_RL43": _3_RL43, "3_RL44": _3_RL44, "3_RL45": _3_RL45,
    "3_RL46": _3_RL46, "3_RL47": _3_RL47, "3_RL48": _3_RL48, "3_RL49": _3_RL49, "3_RL50": _3_RL50,
    "3_RL51": _3_RL51, "3_RL52": _3_RL52, "3_RL53": _3_RL53, "3_RL54": _3_RL54,
    MM1: MM1, MM2: MM2, MM3: MM3, MM4: MM4, MM5: MM5,
    MM6: MM6, MM7: MM7, MM8: MM8, MM9: MM9, MM10: MM10,
    MM11: MM11, MM12: MM12, MM13: MM13, MM14: MM14, MM15: MM15,
    MM16: MM16, MM17: MM17, MM18: MM18, MM19: MM19, MM20: MM20,
    MM21: MM21, MM22: MM22, MM23: MM23, MM24: MM24, MM25: MM25,
    MM26: MM26, MM27: MM27,
    GM1: GM1, GM2: GM2, GM3: GM3, GM4: GM4, GM5: GM5,
    GM6: GM6, GM7: GM7, GM8: GM8, GM9: GM9, GM10: GM10,
    GM11: GM11, GM12: GM12, GM13: GM13, GM14: GM14, GM15: GM15,
    GM16: GM16, GM17: GM17, GM18: GM18, GM19: GM19, GM20: GM20,
    GM21: GM21, GM22: GM22, GM23: GM23, GM24: GM24, GM25: GM25,
    GM26: GM26, GM27: GM27, GM28: GM28, GM29: GM29, GM30: GM30,
    GM31: GM31, GM32: GM32, GM33: GM33, GM34: GM34, GM35: GM35,
    GM36: GM36, GM37: GM37, GM38: GM38, GM39: GM39, GM40: GM40,
    GM41: GM41, GM42: GM42, GM43: GM43, GM44: GM44, GM45: GM45,
    GM46: GM46, GM47: GM47, GM48: GM48, GM49: GM49, GM50: GM50,
    GM51: GM51, GM52: GM52, GM53: GM53, GM54: GM54, GM55: GM55,
    GM56: GM56, GM57: GM57, GM58: GM58, GM59: GM59, GM60: GM60,
    GM61: GM61, GM62: GM62, GM63: GM63, GM64: GM64, GM65: GM65,
    GM66: GM66, GM67: GM67, GM68: GM68, GM69: GM69, GM70: GM70,
    GM71: GM71, GM72: GM72, GM73: GM73, GM74: GM74, GM75: GM75,
    GM76: GM76, GM77: GM77, GM78: GM78, GM79: GM79, GM80: GM80,
    GM81: GM81, GM82: GM82, GM83: GM83, GM84: GM84, GM85: GM85,
    GM86: GM86, GM87: GM87, GM88: GM88, GM89: GM89, GM90: GM90,
    GM91: GM91, GM92: GM92, GM93: GM93, GM94: GM94, GM95: GM95,
    GM96: GM96, GM97: GM97, GM98: GM98, GM99: GM99, GM100: GM100,
    GM101: GM101, GM102: GM102, GM103: GM103, GM104: GM104, GM105: GM105,
    GM106: GM106, GM107: GM107, GM108: GM108, GM109: GM109, GM110: GM110,
    GM111: GM111, GM112: GM112,
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
