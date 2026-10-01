<script setup lang="ts">
import { computed, ref } from "vue";
import { blips, quadrants, rings, type Blip } from "./radar-data";

const SIZE = 640;
const C = SIZE / 2;
const R = 300;
const ringR = [0.4, 0.62, 0.82, 1];
const active = ref<number | null>(null);
const filter = ref<number | null>(null);

// quadrantes: 0 sup-esq, 1 sup-dir, 2 inf-dir, 3 inf-esq
const startAngle = [180, 270, 0, 90];

const placed = computed(() => {
  const cells: Record<string, number[]> = {};
  blips.forEach((blip, i) => {
    const key = `${blip.quadrant}-${blip.ring}`;
    (cells[key] ??= []).push(i);
  });
  return blips.map((blip, i) => {
    const ri = rings.findIndex((r) => r.id === blip.ring);
    const list = cells[`${blip.quadrant}-${blip.ring}`];
    const k = list.indexOf(i);
    const inner = ri === 0 ? 0.1 : ringR[ri - 1] + 0.05;
    const outer = ringR[ri] - 0.05;
    const level = [0.2, 0.8, 0.5][k % 3];
    const rr = (inner + (outer - inner) * level) * R;
    const ang = startAngle[blip.quadrant] + 8 + (74 * (k + 0.5)) / list.length;
    const rad = (ang * Math.PI) / 180;
    return { blip, i, ri, x: C + rr * Math.cos(rad), y: C + rr * Math.sin(rad) };
  });
});

const visible = (b: Blip) => filter.value === null || b.quadrant === filter.value;
const ringClass = (id: string) => `ring-${id}`;
const grouped = computed(() =>
  quadrants.map((q, qi) => ({
    q,
    qi,
    rings: rings.map((r) => ({
      r,
      items: placed.value.filter((p) => p.blip.quadrant === qi && p.blip.ring === r.id),
    })),
  })),
);
</script>

<template>
  <div class="radar">
    <div class="radar-filters" role="group" aria-label="Filtrar quadrante">
      <button :class="{ on: filter === null }" @click="filter = null">Todos</button>
      <button
        v-for="(q, qi) in quadrants"
        :key="q"
        :class="{ on: filter === qi }"
        @click="filter = qi"
      >
        {{ q }}
      </button>
    </div>

    <div class="radar-grid">
      <svg :viewBox="`0 0 ${SIZE} ${SIZE}`" role="img" aria-label="Tech Radar 2026">
        <circle
          v-for="(f, ri) in ringR"
          :key="ri"
          :cx="C"
          :cy="C"
          :r="f * R"
          class="ring-line"
          :class="ringClass(rings[ri].id)"
        />
        <line :x1="C - R" :y1="C" :x2="C + R" :y2="C" class="axis" />
        <line :x1="C" :y1="C - R" :x2="C" :y2="C + R" class="axis" />
        <text
          v-for="(f, ri) in ringR"
          :key="'l' + ri"
          :x="C + 4"
          :y="C - f * R + 14"
          class="ring-label"
        >
          {{ rings[ri].label }}
        </text>
        <text
          v-for="(q, qi) in quadrants"
          :key="'q' + qi"
          :x="qi === 0 || qi === 3 ? 12 : SIZE - 12"
          :y="qi < 2 ? 22 : SIZE - 14"
          :text-anchor="qi === 0 || qi === 3 ? 'start' : 'end'"
          class="quad-label"
        >
          {{ q }}
        </text>
        <g
          v-for="p in placed"
          :key="p.i"
          class="blip"
          :class="[ringClass(p.blip.ring), { dim: !visible(p.blip) || (active !== null && active !== p.i), hot: active === p.i }]"
          tabindex="0"
          @mouseenter="active = p.i"
          @mouseleave="active = null"
          @focus="active = p.i"
          @blur="active = null"
        >
          <circle :cx="p.x" :cy="p.y" r="9" />
          <text :x="p.x" :y="p.y + 3.5" text-anchor="middle">{{ p.i + 1 }}</text>
        </g>
      </svg>

      <aside class="radar-detail" aria-live="polite">
        <template v-if="active !== null">
          <h3>{{ blips[active].name }}</h3>
          <p class="tag" :class="ringClass(blips[active].ring)">
            {{ rings.find((r) => r.id === blips[active!].ring)?.label }} ·
            {{ quadrants[blips[active].quadrant] }}
          </p>
          <p>{{ blips[active].note }}</p>
        </template>
        <p v-else class="hint">Passe o mouse (ou use Tab) sobre um ponto para ver detalhes.</p>
        <ul class="legend">
          <li v-for="r in rings" :key="r.id" :class="ringClass(r.id)"><i />{{ r.label }}</li>
        </ul>
      </aside>
    </div>

    <div class="radar-lists">
      <section v-for="g in grouped" v-show="filter === null || filter === g.qi" :key="g.qi">
        <h3>{{ g.q }}</h3>
        <template v-for="x in g.rings" :key="x.r.id">
          <h4 v-if="x.items.length" :class="ringClass(x.r.id)">{{ x.r.label }}</h4>
          <ul>
            <li
              v-for="p in x.items"
              :key="p.i"
              @mouseenter="active = p.i"
              @mouseleave="active = null"
            >
              <span class="num" :class="ringClass(p.blip.ring)">{{ p.i + 1 }}</span>
              <a v-if="p.blip.link" :href="p.blip.link">{{ p.blip.name }}</a>
              <span v-else>{{ p.blip.name }}</span>
            </li>
          </ul>
        </template>
      </section>
    </div>
  </div>
</template>

<style scoped>
.radar {
  --adote: #16a34a;
  --experimente: #2563eb;
  --avalie: #d97706;
  --evite: #dc2626;
  margin: 24px 0;
}
.dark .radar {
  --adote: #4ade80;
  --experimente: #60a5fa;
  --avalie: #fbbf24;
  --evite: #f87171;
}
.radar-filters { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }
.radar-filters button {
  padding: 6px 14px; border-radius: 999px; font-size: 14px;
  border: 1px solid var(--vp-c-divider); background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1); cursor: pointer;
}
.radar-filters button.on { background: var(--vp-c-brand-1); border-color: var(--vp-c-brand-1); color: #fff; }
.radar-grid { display: grid; grid-template-columns: minmax(0, 1fr) 260px; gap: 24px; align-items: start; }
svg { width: 100%; height: auto; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 16px; }
.ring-line { fill: none; stroke: var(--vp-c-divider); stroke-width: 1.2; }
.axis { stroke: var(--vp-c-divider); stroke-width: 1.2; }
.quad-label { font-size: 13px; font-weight: 700; fill: var(--vp-c-text-2); }
.ring-label { font-size: 11px; fill: var(--vp-c-text-3); font-weight: 600; }
.blip { cursor: pointer; transition: opacity 0.15s; outline: none; }
.blip circle { stroke: var(--vp-c-bg); stroke-width: 1.5; }
.blip text { font-size: 8.5px; font-weight: 700; fill: #fff; pointer-events: none; }
.blip.dim { opacity: 0.28; }
.blip.hot circle, .blip:focus circle { r: 12; stroke: var(--vp-c-text-1); }
.blip.ring-adote circle, .num.ring-adote { fill: var(--adote); background: var(--adote); }
.blip.ring-experimente circle, .num.ring-experimente { fill: var(--experimente); background: var(--experimente); }
.blip.ring-avalie circle, .num.ring-avalie { fill: var(--avalie); background: var(--avalie); }
.blip.ring-evite circle, .num.ring-evite { fill: var(--evite); background: var(--evite); }
.radar-detail { padding: 16px; border: 1px solid var(--vp-c-divider); border-radius: 14px; background: var(--vp-c-bg-soft); position: sticky; top: 80px; }
.radar-detail h3 { margin: 0 0 4px; font-size: 18px; border: 0; padding: 0; }
.radar-detail p { margin: 6px 0; font-size: 14px; }
.hint { color: var(--vp-c-text-2); }
.tag { font-weight: 600; font-size: 13px !important; }
.tag.ring-adote { color: var(--adote); } .tag.ring-experimente { color: var(--experimente); }
.tag.ring-avalie { color: var(--avalie); } .tag.ring-evite { color: var(--evite); }
.legend { list-style: none; padding: 12px 0 0; margin: 12px 0 0; border-top: 1px solid var(--vp-c-divider); display: grid; gap: 6px; font-size: 14px; }
.legend li { display: flex; align-items: center; gap: 8px; margin: 0; }
.legend i { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }
.legend .ring-adote i { background: var(--adote); } .legend .ring-experimente i { background: var(--experimente); }
.legend .ring-avalie i { background: var(--avalie); } .legend .ring-evite i { background: var(--evite); }
.radar-lists { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; margin-top: 28px; }
.radar-lists section { border: 1px solid var(--vp-c-divider); border-radius: 14px; padding: 4px 16px 12px; }
.radar-lists h3 { margin: 12px 0 4px; font-size: 16px; border: 0; padding: 0; }
.radar-lists h4 { margin: 12px 0 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; }
.radar-lists h4.ring-adote { color: var(--adote); } .radar-lists h4.ring-experimente { color: var(--experimente); }
.radar-lists h4.ring-avalie { color: var(--avalie); } .radar-lists h4.ring-evite { color: var(--evite); }
.radar-lists ul { list-style: none; padding: 0; margin: 0; }
.radar-lists li { display: flex; align-items: center; gap: 8px; margin: 3px 0; font-size: 14px; }
.num { display: inline-flex; width: 20px; height: 20px; border-radius: 50%; color: #fff; font-size: 10px; font-weight: 700; align-items: center; justify-content: center; flex: none; }
@media (max-width: 860px) { .radar-grid { grid-template-columns: 1fr; } .radar-detail { position: static; } }
</style>
