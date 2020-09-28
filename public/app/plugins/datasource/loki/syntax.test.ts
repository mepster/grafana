import syntax from './syntax';
import Prism from 'prismjs';

describe('Loki syntax', () => {
  it('should highlight Loki query correctly', () => {
    expect(Prism.highlight('{key="val#ue"}', syntax, 'loki')).toBe(
      '<span class="token context-labels"><span class="token punctuation">{</span><span class="token label-key attr-name">key</span>=<span class="token label-value attr-value">"val#ue"</span></span><span class="token punctuation">}</span>'
    );
    expect(Prism.highlight('{key="#value"}', syntax, 'loki')).toBe(
      '<span class="token context-labels"><span class="token punctuation">{</span><span class="token label-key attr-name">key</span>=<span class="token label-value attr-value">"#value"</span></span><span class="token punctuation">}</span>'
    );
    expect(Prism.highlight('{key="value#"}', syntax, 'loki')).toBe(
      '<span class="token context-labels"><span class="token punctuation">{</span><span class="token label-key attr-name">key</span>=<span class="token label-value attr-value">"value#"</span></span><span class="token punctuation">}</span>'
    );
    expect(Prism.highlight('#test{key="value"}', syntax, 'loki')).toBe(
      '<span class="token comment">#test{key="value"}</span>'
    );
    expect(Prism.highlight('{key="value"}#test', syntax, 'loki')).toBe(
      '<span class="token context-labels"><span class="token punctuation">{</span><span class="token label-key attr-name">key</span>=<span class="token label-value attr-value">"value"</span></span><span class="token punctuation">}</span><span class="token comment">#test</span>'
    );
  });
  it('should highlight functions in Loki query correctly', () => {
    expect(Prism.highlight('rate({key="value"}[5m])', syntax, 'loki')).toBe(
      '<span class="token function">rate</span><span class="token punctuation">(</span><span class="token context-labels"><span class="token punctuation">{</span><span class="token label-key attr-name">key</span>=<span class="token label-value attr-value">"value"</span></span><span class="token punctuation">}</span><span class="token context-range">[<span class="token range-duration number">5m</span></span>]<span class="token punctuation">)</span>'
    );
    expect(Prism.highlight('avg_over_time({key="value"}[5m])', syntax, 'loki')).toBe(
      '<span class="token function">avg_over_time</span><span class="token punctuation">(</span><span class="token context-labels"><span class="token punctuation">{</span><span class="token label-key attr-name">key</span>=<span class="token label-value attr-value">"value"</span></span><span class="token punctuation">}</span><span class="token context-range">[<span class="token range-duration number">5m</span></span>]<span class="token punctuation">)</span>'
    );
  });
});
