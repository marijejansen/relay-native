import { Component, Mixins } from "vue-property-decorator";
import TestMixin from '@/mixins/TestMixin';
import RelayMixin from '@/mixins/RelayMixins';
import Selector from '@/components/selectors/Selector';
import store from '@/store/index';
import { Course } from '@/models/Course';
import { Relay } from '@/models/relay';

@Component({ components: { Selector } })
export default class Calculate extends Mixins(TestMixin, RelayMixin) {

    private courseNumber: number = store.getters['calculate/getCourse'];

    private relayNumber: number = store.getters['calculate/getRelay'];

    get courses(): string[] {
        var numberOfCourses = Object.keys(Course).length / 2;
        var courses: string[] = [];
        for (let i = 0; i < numberOfCourses; i++) {
            courses.push(this.getCourseString(Course[i]));
        }
        return courses;
    }

    get relays(): string[] {
        var numberOfRelays = Object.keys(Relay).length / 2;
        var relays: string[] = [];
        for (let i = 0; i < numberOfRelays; i++) {
            relays.push(this.getRelayString(Relay[i]));
        }
        return relays;
    }

    setCourse(courseNum: number) {
        store.commit('calculate/setCourse', courseNum);
    }

    setRelay(relayNum: number) {
        store.commit('calculate/setRelay', relayNum);
    }
}